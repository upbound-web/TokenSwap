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
import React from 'react'

// reactstrap components
import { Button, Input, Container, Row, Col } from 'reactstrap'

import bg from '../assets/img/bg31.jpg'

// core components

export default function Main() {
  return (
    <>
      <Container>
        <Row className='align-items-center text-left full'>
          <Col className='ml-auto mr-auto' lg='6' md='8' xs='12'>
            <h1 className='title'>
              Integrated <br />
              <strong className='text-warning'>Front marketing</strong>
            </h1>
            <p className='description'>
              We aim high at being focused on building relationships with our
              clients and community. Using our creative gifts drives this
              foundation.
            </p>
            <Row className='row-input'>
              <Col className='mt-1' md='8' xs='6'>
                <Input
                  aria-label='Your email'
                  id='signupSrEmail'
                  name='email'
                  placeholder='Your email'
                  type='email'
                />
              </Col>
              <Col md='4' xs='6'>
                <Button color='warning'>Get Started</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <p>Testing</p>
          </Col>
        </Row>
        <Row className='mt-5 pt-5 mb-5'>
          <img src={bg}></img>
        </Row>
      </Container>
    </>
  )
}
