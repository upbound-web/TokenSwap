import React, { Component } from 'react'
import Web3 from 'web3'
import Token from '../abis/Token.json'
import EthSwap from '../abis/EthSwap.json'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ ethBalance })

    //Load Token
    const newtorkId = await web3.eth.net.getId()
    const tokenData = Token.networks[newtorkId]
    if (tokenData) {
      const token = new web3.eth.Contract(Token.abi, tokenData.address)
      this.setState({ token })
      let tokenBalance = await token.methods
        .balanceOf(this.state.account)
        .call()
      this.setState({ tokenBalance: tokenBalance.toString() })
    } else {
      window.alert('Token Contract not deployed to detected network')
    }

    //Load EthSwap
    const ethSwapData = EthSwap.networks[newtorkId]
    if (ethSwapData) {
      const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
      this.setState({ ethSwap })
    } else {
      window.alert('ethSwap Contract not deployed to detected network')
    }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    return false
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      token: {},
      ethSwap: {},
      ethBalance: '0',
      tokenBalance: '0',
      loading: true,
    }
  }

  render() {
    let content
    if (this.state.loading) {
      content = (
        <p id='loader' className='text-center'>
          Loading.......
        </p>
      )
    } else {
      content = <Main />
    }
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className='container-fluid mt-5'>
          <div className='row'>
            <main role='main' className='col-lg-12 d-flex text-center'>
              <div className='content mr-auto ml-auto'>{content}</div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App
