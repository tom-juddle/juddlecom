import React from 'react'
import { Container, Row, Col, Nav,
         Navbar, NavbarBrand} from 'reactstrap'
import styled from 'styled-components'
import Styles from '../css/index.scss'
import navLogo from '../static/images/nav-logo.png';

const FooterBlock = styled.footer`
	background: #000;
	color: #fff;
	
	div.container{
	  display: flex;
	  height: 143px;
	  align-content: center;
	  flex-direction: column;
	  padding: 30px;
	  box-sizing: border-box;
	}
	
	div#year{
	  margin-bottom: 20px;
	}
	
	p{
	  white-space: pre-wrap;
	}
	
	a{
	  color: #fff;
	}
	
	a:hover{
	  text-decoration: underline;
	}
`;

export default class extends React.Component {

  static propTypes() {
    return {
      children: React.PropTypes.object.isRequired,
      fluid: React.PropTypes.boolean,
      navmenu: React.PropTypes.boolean,
    }
  }
  
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
      modal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  
  async toggleModal(e) {
    if (e) e.preventDefault()

    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <header>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Juddle | Re-imagine Recruitment'}</title>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
          <style dangerouslySetInnerHTML={{__html: Styles}}/>
        </header>
        <Navbar light className="navbar navbar-expand-md pt-3 pb-3">
          <NavbarBrand href="/">
            <img src={navLogo} alt="Juddle"/>
          </NavbarBrand>
          <input className="nojs-navbar-check" id="nojs-navbar-check" type="checkbox" aria-label="Menu"/>
          <label tabIndex="1" htmlFor="nojs-navbar-check" className="nojs-navbar-label mt-2" />
          <div className="nojs-navbar">
            <Nav navbar>
              <div tabIndex="1" className="dropdown nojs-dropdown">
                <div className="nav-item">
                  <span className="dropdown-toggle nav-link">Examples</span>
                </div>
                <div className="dropdown-menu">
                  {/*<Link prefetch href="/auth/index">*/}
                  {/*  <a href="/auth/index" className="dropdown-item">Sign Up</a>*/}
                  {/*</Link>*/}
                  {/*<Link prefetch href="/examples/layout">*/}
                  {/*  <a href="/examples/layout" className="dropdown-item">Layout</a>*/}
                  {/*</Link>*/}
                  {/*<Link prefetch href="/skills">*/}
                  {/*  <a href="/skills" className="dropdown-item">Skills</a>*/}
                  {/*</Link>*/}
                  {/*<Link prefetch href="/examples/routing">*/}
                  {/*  <a href="/examples/routing" className="dropdown-item">Routing</a>*/}
                  {/*</Link>*/}
                  {/*<Link prefetch href="/examples/styling">*/}
                  {/*  <a href="/examples/styling" className="dropdown-item">Styling</a>*/}
                  {/*</Link>*/}
                </div>
              </div>
            </Nav>
          </div>
        </Navbar>
        <MainBody navmenu={this.props.navmenu} fluid={this.props.fluid} container={this.props.container}>
          {this.props.children}
        </MainBody>

        <FooterBlock>
          <Container fluid={this.props.fluid}>
            <div id="year">
              &copy; {new Date().getFullYear()} Juddle
            </div>
            <div id="cookiesPrivacyTerms">
              <a href="/info.htm">Cookies, Privacy and Terms</a>
            </div>
          </Container>
        </FooterBlock>
      </React.Fragment>
    )
  }
}

export class MainBody extends React.Component {
  render() {
    if (this.props.container === false) {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      )
    } else if (this.props.navmenu === false) {
      return (
        <Container fluid={this.props.fluid} style={{marginTop: '1em'}}>
          {this.props.children}
        </Container>
      )
    } else {
      return (
        <Container fluid={this.props.fluid} style={{marginTop: '1em'}}>
          <Row>
            <Col xs="12" md="9" lg="10">
              {this.props.children}
            </Col>
          </Row>
        </Container>
      )
    }
  }
}