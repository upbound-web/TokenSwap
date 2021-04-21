/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react'

// reactstrap components
import { Button, Input, Container, Row, Col } from 'reactstrap'
import ethLogo from '../assets/img/eth-logo.png'
import tokenLogo from '../assets/img/token-logo.png'

import bg from '../assets/img/bg31.jpg'

// core components

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0',
    }
  }
  render() {
    return (
      <>
        <Container>
          <Row className='align-items-center text-left full'>
            <Row className='w-100'>
              <Col lg='12 text-center'>
                <h1 className='title'>
                  Swap Currency <br />
                  <strong className='text-warning'>Blue Collar Token</strong>
                </h1>
              </Col>
              <Col
                className='ml-auto mr-auto bg-white p-5 rounded'
                lg='7'
                md='8'
                xs='12'
              >
                <form
                  className='mb-3'
                  onSubmit={(event) => {
                    event.preventDefault()
                  }}
                >
                  <Row className='d-flex justify-content-between'>
                    <label className='text-warning h4 m-3'>Input</label>
                    <span className='text-muted h4 m-3'>
                      Balance:{' '}
                      {window.web3.utils.fromWei(
                        this.props.ethBalance,
                        'Ether'
                      )}
                    </span>
                  </Row>
                  <div className='input-group mb-4'>
                    <input
                      type='text'
                      onChange={(event) => {
                        const etherAmount = this.input.value.toString()
                        this.setState({
                          output: etherAmount * 100,
                        })
                        console.log(this.state.output)
                      }}
                      ref={(input) => {
                        this.input = input
                      }}
                      className='form-control text-muted form-control-lg'
                      placeholder='0'
                      required
                    />
                    <div className='input-group-append'>
                      <div className='input-group-text text-warning'>
                        <img src={ethLogo} height='26' alt='' />
                        &nbsp;&nbsp;&nbsp; ETH
                      </div>
                    </div>
                  </div>
                  <Row className='d-flex justify-content-between'>
                    <label className='text-warning h4 m-3'>Output</label>
                    <span className='text-muted h4 m-3'>
                      Balance:{' '}
                      {window.web3.utils.fromWei(
                        this.props.tokenBalance,
                        'Ether'
                      )}
                    </span>
                  </Row>
                  <div className='input-group mb-4'>
                    <input
                      type='text'
                      onChange={(event) => {}}
                      ref={(input) => {}}
                      className='form-control form-control-lg'
                      placeholder='0'
                      disabled
                    />
                    <div className='input-group-append'>
                      <div className='input-group-text text-warning'>
                        <img
                          className='pl-1'
                          src={tokenLogo}
                          height='26'
                          alt=''
                        />
                        &nbsp;&nbsp;&nbsp; BCT
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>Exchange Rate</div>
                    <div>1 ETH = 100 BCT</div>
                  </div>
                  <button className='btn btn-warning btn-block btn-lg'>
                    SWAP
                  </button>
                </form>
              </Col>
            </Row>
          </Row>
          <Row className='mt-5 pt-5 mb-5'>
            <img src={bg}></img>
          </Row>
        </Container>
      </>
    )
  }
}

export default Main
