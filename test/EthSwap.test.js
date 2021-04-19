const { assert } = require('chai')
const { default: Web3 } = require('web3')

const Token = artifacts.require('Token')
const EthSwap = artifacts.require('EthSwap')

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether')
}

contract('EthSwap', ([deployer, investor]) => {
  let token, ethSwap

  before(async () => {
    token = await Token.new()
    ethSwap = await EthSwap.new(token.address)
    //Transfer all Tokens to EthSwap
    await token.transfer(ethSwap.address, tokens('1000000'))
  })

  describe('Token Deployment', async () => {
    it('contract has a name', async () => {
      const name = await token.name()
      assert.equal(name, 'Blue Collar Token')
    })
  })

  describe('EthSwap Deployment', async () => {
    it('contract has a name', async () => {
      const name = await ethSwap.name()
      assert.equal(name, 'Eth Swap Instant Exchange')
    })
  })

  it('contract has tokens', async () => {
    let balance = await token.balanceOf(ethSwap.address)
    assert.equal(balance.toString(), tokens('1000000'))
  })

  describe('buyTokens()', async () => {
    let result

    before(async () => {
      result = await ethSwap.buyTokens({
        from: investor,
        value: web3.utils.toWei('1', 'ether'),
      })
    })
    it('allows user  to instantly purchase tokens from ethSwap for a fixed  price', async () => {
      let investorBalance = await token.balanceOf(investor)
      assert.equal(investorBalance.toString(), tokens('100'))

      let ethSwapBalance
      ethSwapBalance = await token.balanceOf(ethSwap.address)
      assert.equal(ethSwapBalance.toString(), tokens('999900'))
      ethSwapBalance = await web3.eth.getBalance(ethSwap.address)
      assert.equal(ethSwapBalance.toString(), web3.utils.toWei('1', 'Ether'))

      const event = result.logs[0].args

      assert.equal(event.account, investor)
      assert.equal(event.token, token.address)
      assert.equal(event.amount.toString(), tokens('100').toString())
      assert.equal(event.rate.toString(), '100')
    })
  })

  describe('sellTokens()', async () => {
    let result

    before(async () => {
      await token.approve(ethSwap.address, tokens('100'), { from: investor })
      result = await ethSwap.sellTokens(tokens('100'), { from: investor })
    })
    it('allows user  to instantly sell tokens to ethSwap for a fixed  price', async () => {
      //check balance
      let investorBalance = await token.balanceOf(investor)
      assert.equal(investorBalance.toString(), tokens('0'))

      //check ethSwap balance
      let ethSwapBalance
      ethSwapBalance = await token.balanceOf(ethSwap.address)
      assert.equal(ethSwapBalance.toString(), tokens('1000000'))
      ethSwapBalance = await web3.eth.getBalance(ethSwap.address)
      assert.equal(ethSwapBalance.toString(), web3.utils.toWei('0', 'Ether'))

      //check the event details
      const event = result.logs[0].args
      assert.equal(event.account, investor)
      assert.equal(event.token, token.address)
      assert.equal(event.amount.toString(), tokens('100').toString())
      assert.equal(event.rate.toString(), '100')

      //FAILURE: investor cant sell more tokens than they have
      await ethSwap.sellTokens(tokens('500'), { from: investor }).should.be
        .rejected
    })
  })
})
