import React from 'react'
// reactstrap components
import identicon from 'identicon.js'
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavbarText,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap'
import Identicon from 'identicon.js'

export default function ColorNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
  React.useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return function cleanup() {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor('bg-warning')
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor('navbar-transparent')
    }
  }
  return (
    <>
      <Navbar className={'fixed-top ' + navbarColor} expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand to='/index' id='tooltip6619950104'>
              <span>BCT•</span> Blue Collar Token
            </NavbarBrand>
            <button className='navbar-toggler' id='navigation'>
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler='#navigation'>
            <div className='navbar-collapse-header'>
              <Row>
                <Col className='collapse-brand' xs='6'>
                  <a href='#pablo' onClick={(e) => e.preventDefault()}>
                    BCT• <span>Token Swap</span>
                  </a>
                </Col>
                <Col className='collapse-close text-right' xs='6'>
                  <button className='navbar-toggler' id='navigation'>
                    <i className='tim-icons icon-simple-remove' />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color='default' nav>
                  <i className='fa fa-cogs d-lg-none d-xl-none' />
                  Blue Collar Projects
                </DropdownToggle>
                <DropdownMenu className='dropdown-with-icons'>
                  <DropdownItem to='/index'>
                    <i className='tim-icons icon-paper' />
                    Components
                  </DropdownItem>
                  <DropdownItem to='/presentation'>
                    <i className='tim-icons icon-bullet-list-67' />
                    Presentation Page
                  </DropdownItem>
                  <DropdownItem
                    href='https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar'
                    target='_blank'
                  >
                    <i className='tim-icons icon-book-bookmark' />
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle caret color='default' nav>
                  <i
                    aria-hidden={true}
                    className='tim-icons icon-book-bookmark'
                  />
                  <p>Examples</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to='/about-us'>
                    <i className='tim-icons icon-bulb-63' />
                    About-us
                  </DropdownItem>
                  <DropdownItem to='/blog-post'>
                    <i className='tim-icons icon-align-center' />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to='/blog-posts'>
                    <i className='tim-icons icon-chart-bar-32' />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to='/contact-us'>
                    <i className='tim-icons icon-square-pin' />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to='/landing-page'>
                    <i className='tim-icons icon-paper' />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to='/pricing'>
                    <i className='tim-icons icon-coins' />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to='/ecommerce'>
                    <i className='tim-icons icon-basket-simple' />
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem to='/product-page'>
                    <i className='tim-icons icon-bag-16' />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to='/profile-page'>
                    <i className='tim-icons icon-lock-circle' />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to='/404-error'>
                    <i className='tim-icons icon-button-power' />
                    404 Error Page
                  </DropdownItem>
                  <DropdownItem to='/500-error'>
                    <i className='tim-icons icon-alert-circle-exc' />
                    500 Error Page
                  </DropdownItem>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color='default'
                      className='dropdown-item'
                      tag='a'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        aria-hidden={true}
                        className='tim-icons icon-book-bookmark'
                      />
                      App Pages
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to='/account-settings'>
                        <i className='tim-icons icon-lock-circle' />
                        Account Settings
                      </DropdownItem>
                      <DropdownItem to='/login-page'>
                        <i className='tim-icons icon-tablet-2' />
                        Login Page
                      </DropdownItem>
                      <DropdownItem to='/register-page'>
                        <i className='tim-icons icon-laptop' />
                        Register Page
                      </DropdownItem>
                      <DropdownItem to='/reset-page'>
                        <i className='tim-icons icon-molecule-40' />
                        Reset Page
                      </DropdownItem>
                      <DropdownItem to='/invoice-page'>
                        <i className='tim-icons icon-notes' />
                        Invoice Page
                      </DropdownItem>
                      <DropdownItem to='/checkout-page'>
                        <i className='tim-icons icon-basket-simple' />
                        Checkout Page
                      </DropdownItem>
                      <DropdownItem to='/chat-page'>
                        <i className='tim-icons icon-email-85' />
                        Chat Page
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavbarText>
                <span className='text-warning'>Acct:</span> {props.account}
              </NavbarText>
              {props.account ? (
                <img
                  className='ml-2 my-auto'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(
                    props.account,
                    30
                  ).toString()}`}
                  alt='identicon image'
                />
              ) : (
                <span></span>
              )}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  )
}
