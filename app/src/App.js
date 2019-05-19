import React from 'react'
import { Container } from 'reactstrap'
import Layout from './components/layout'
import Page from './components/page'
import Feature from './components/feature'
import styled, { css } from 'styled-components'
import bg1 from './static/images/bg1.png';
import bubble from './static/images/bubble.png';
import skills from './static/images/skills.svg';
import location from './static/images/location.svg';
import matching from './static/images/matching.svg';
import chat from './static/images/chat.svg';
import matchPhone from './static/images/match_phone.png';
import chatPhone from './static/images/chat_phone.png';
import skillsPhone from './static/images/skills_phone.png';

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
		margin: 0;
	`}
`;

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

export default class App extends Page {

    render() {
      return (

        <Layout {...this.props} navmenu={true} container={false}>
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
                <a href="/auth/index">
                  <JuddleButton
                    primary
                  >
                    Join Now For Free
                  </JuddleButton>
                </a>
              </div>
              <JuddleButton
              >
                Employer? Join Here
              </JuddleButton>
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
        </Layout>
      )
    }
}