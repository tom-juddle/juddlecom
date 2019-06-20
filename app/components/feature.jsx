import React from 'react'
import styled from 'styled-components';
import { Container } from 'reactstrap'

const Feature = styled.div`
	background-color: #ffffff;
`;

const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const Img = styled.img`
	max-width: 100%;
	margin-top: 23px;
	margin-bottom: 24px;
`;

const Header2 = styled.h2`
	margin: 23px 0 20px 0;
	padding: 0;
`;

const Header3 = styled.h3`
	margin: 0;
	padding: 0;
`;

const Para = styled.p`
`;

const dark = {
	backgroundColor: "#f3f3f3"
};

export default class FeatureComp extends React.Component {

	render() {
		return (
			<Feature style={(this.props.dark ? dark : null)}>
				<Container>
					<FeatureContainer>
						<Header2>{this.props.h2}</Header2>
						<Header3>{this.props.h3}</Header3>
						<Img src={this.props.image}/>
						<Para>{this.props.para}</Para>
					</FeatureContainer>
				</Container>
			</Feature>
		)
	}
}
