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

import BuyForm from './BuyForm'
import SellForm from './SellForm'

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
      currentForm: 'buy',
    }
  }
  render() {
    let content
    if (this.state.currentForm === 'buy') {
      content = (
        <BuyForm
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          buyTokens={this.props.buyTokens}
        />
      )
    } else {
      content = (
        <SellForm
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          sellTokens={this.props.sellTokens}
        />
      )
    }
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
                <div className='d-flex justify-content-between mb-3'>
                  <Button
                    light
                    onClick={(event) => {
                      this.setState({ currentForm: 'buy' })
                    }}
                  >
                    BUY
                  </Button>
                  <span className='text-muted'>&lt; &nbsp; &gt;</span>
                  <Button
                    light
                    onClick={(event) => {
                      this.setState({ currentForm: 'sell' })
                    }}
                  >
                    SELL
                  </Button>
                </div>
              </Col>
              <Col
                className='ml-auto mr-auto bg-white p-5 rounded'
                lg='7'
                md='8'
                xs='12'
              >
                {content}
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
