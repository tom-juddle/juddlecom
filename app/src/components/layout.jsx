import React from 'react'
import { Container, Row, Col, Nav, Navbar, NavbarBrand, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import styled, {css} from 'styled-components'
import Styles from '../css/index.scss'
import navLogo from '../images/nav-logo.png';
import ContactForm from '../components/contactform.jsx';
import bubble from "../images/bubble.png";
import Feature from "./feature";
import skills from "../images/skills.svg";
import location from "../images/location.svg";
import matching from "../images/matching.svg";
import chat from "../images/chat.svg";
import matchPhone from "../images/match_phone.png";
import chatPhone from "../images/chat_phone.png";
import skillsPhone from "../images/skills_phone.png";
import bg1 from '../images/bg1.png';
import ReactGA from 'react-ga';
import modalHeaderImg from '../images/juddle_demo_request.png';
import CookieConsent from "react-cookie-consent";

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

const Bg = styled.div`
  background: url(${bg1}) no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 7vh;
  font-weight: 700;
  /* Text style for "Match and" */
  letter-spacing: -1.5px;
  /* Text style for "with emplo" */
  letter-spacing: -1.5px;
  line-height: 64px;
  text-align: center;
`;

const P = styled.p`
  font-family: "Helvetica Neue";
  font-size: 3vh;
  text-align: center;
  font-weight: 400;
  /* Text style for "Juddle is" */
  letter-spacing: -0.75px;
  color: #fff;
`;

const JuddleButton = styled.button`
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  border: solid 1px #fff;
  width: 50vh;
  padding: 2vh 0;
  font-family: "Helvetica Neue";
  font-size: 3vh;
  margin: 20px 0;
  ${props => props.primary && css`
		background-color: #4170b4;
		border: none;
		margin: 20px 0;
	`}
`;

const juddleButtonSmall = {
  width: '20vh',
  flexBasis: 'min-content',
  padding: '10px 15px',
  margin: '0'
};

const SpeechBubble = styled.img`
  max-width: 132px;
  width: 100%;
  max-height: 130px;
  margin-top: 9vh;
`;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const NavBarStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'middle',
  alignContent: 'middle',
  width: '100%',
  justifyContent: 'space-between',
  marginRight: '0'
};

export default class extends React.Component {

  static propTypes() {
    return {
      children: React.PropTypes.object.isRequired,
      fluid: React.PropTypes.boolean,
      navmenu: React.PropTypes.boolean,
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      modal: false
    };
    this.toggleModal = this.toggleModal.bind(this)
  }

  async toggleModal(e) {
    if (e) e.preventDefault();

    this.setState({
      modal: !this.state.modal
    });
  }

  initializeReactGA  = () => {
    ReactGA.initialize('UA-59596713-2');
    ReactGA.pageview(window.location.hostname + location.pathname + location.search);
  };

  componentDidMount() {
    this.initializeReactGA();
  }
  
  render() {
    return (
      <React.Fragment>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
          <style dangerouslySetInnerHTML={{__html: Styles}}/>
          <title>Juddle | Re-imagine Recruitment</title>
          <meta name="description" content="Juddle is an innovative new recruiting technology, driven by artificial intelligence. Sign up below and be one of the first to receive our beta app." />
          <meta property="og:description" content="Juddle is an innovative new recruiting technology, driven by artificial intelligence. Sign up below and be one of the first to receive our beta app." />
          <meta property="og:type" content="business" />
          <meta property="og:title" content="Juddle | Re-imagine Recruitment" />
          <meta property="og:url" content="http://juddle.com/" />
          <meta property="og:image" content="http://juddle.com/images/juddle-web-image.jpg" />
          <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png" />
          <link rel="manifest" href="../images/site.webmanifest" />
          <link rel="mask-icon" href="../images/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-config" content="../images/browserconfig.xml" />
        </head>
        <Navbar light className="navbar navbar-expand-md pt-3 pb-3">
          <NavbarBrand style={NavBarStyles} href="/">
            <img src={navLogo} alt="Juddle" height={"50"}/>
            <JuddleButton
              primary
              onClick={this.toggleModal}
              modal={this.modal}
              toggleModal={this.toggleModal}
              style={juddleButtonSmall}
            >
              View A Demo
            </JuddleButton>
          </NavbarBrand>
          {/*<input className="nojs-navbar-check" id="nojs-navbar-check" type="checkbox" aria-label="Menu"/>
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
                  {/*</Link>
                </div>
              </div>
            </Nav>
          </div>*/}
        </Navbar>
        <MainBody navmenu={this.props.navmenu} toggleModal={this.toggleModal} fluid={this.props.fluid} container={this.props.container}>
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
        <ContactFormModal modal={this.state.modal} toggleModal={this.toggleModal} />
      </React.Fragment>
    )
  }
}

export class MainBody extends React.Component {
  render() {
    if (this.props.container === false) {
      return (
        <React.Fragment>
          <CookieConsent
            enableDeclineButton
            location="bottom"
            buttonText="I accept"
            cookieName="juddleCookies"
            style={{ background: "#2B373B" }}
            buttonStyle={{ borderRadius: "5px", background: "#1270b7", color: "#fff", fontSize: "16px" }}
            declineButtonStyle={{borderRadius: "5px", background: "transparent", border: "solid 1px #fff", color: "#fff", fontSize: "16px"}}
            expires={150}
          >
            This website uses cookies and analytics to enhance the user experience.{" "}
          </CookieConsent>
          <Bg>
            <Container style={containerStyle}>
              <SpeechBubble
                src={bubble}
                alt="juddle bubble"
              />
              <Title>
                Match and Chat with employers
              </Title>
              <P>
                Juddle is an on-demand job site that
                allows you to connect directly with
                employers based on your skills and chat within minutes.
              </P>
              <div>
                <JuddleButton
                  primary
                  onClick={this.props.toggleModal}
                  modal={this.props.modal}
                  toggleModal={this.props.toggleModal}
                >
                  Request A Demo
                </JuddleButton>
              </div>
              {/*<JuddleButton
              >
                Employer? Join Here
              </JuddleButton>*/}
            </Container>
          </Bg>
          <Feature
            dark={false}
            h2={"You're in control"}
            image={skills}
            h3={"Skills"}
            para={"Use your skills and not a CV to match with employers"}
          />
          <Feature
            dark={true}
            image={location}
            h3={"Location"}
            para={"Juddle picks up your location to show the jobs nearest you"}
          />
          <Feature
            dark={false}
            image={matching}
            h3={"Matching"}
            para={"We use artificial intelligence and machine learning to match you directly to the right employers."}
          />
          <Feature
            dark={true}
            image={chat}
            h3={"Chat"}
            para={"We allow you to chat directly with the employer straight after matching, getting you the job quicker"}
          />
          <Feature
            dark={false}
            h2={"Match Directly with Employers"}
            image={matchPhone}
          />
          <Feature
            dark={true}
            h2={"Chat instantly with Employers"}
            image={chatPhone}
          />
          <Feature
            dark={false}
            h2={"Use Skills to find the right people"}
            image={skillsPhone}
          />
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

export class ContactFormModal extends React.Component {
  render() {
    if (this.props.providers === null) return null

    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} style={{maxWidth: 490}}>
        <ModalHeader style={{padding: '0'}}><img src={modalHeaderImg} style={{width:'100%'}} alt="Sign up for a demo"/></ModalHeader>
        <ModalBody style={{padding: '1em 2em'}}>
          <ContactForm/>
        </ModalBody>
      </Modal>
    )
  }
}