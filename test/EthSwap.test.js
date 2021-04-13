const { assert } = require('chai')

const Token = artifacts.require('Token')
const EthSwap = artifacts.require('EthSwap')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('EthSwap', (accounts) => {
  let token, ethSwap

  before(async () => {
    token = await Token.new()
    ethSwap = await EthSwap.new()
    //Transfer all Tokens to EthSwap
    await token.transfer(ethSwap.address, '1000000000000000000000000')
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
    assert.equal(balance.toString(), '1000000000000000000000000')
  })
})
