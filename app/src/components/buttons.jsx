import React from 'react'
import styled, {css} from 'styled-components';
import { Container } from 'reactstrap'

const Button = styled.button`
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  border: solid 1px #fff;
  width: 50vh;
  padding: 1.2vh 0;;
  font-family: "Helvetica Neue";
  font-size: 1rem;
  max-width: 100%;
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  width:100%;
  &:hover{
    cursor: pointer;
   }
   ${props => props.buttonType === "Juddle" && css`
		background-color: #4170b4;
		border: none;
	`}
  ${props => props.buttonType === "Google" && css`
		border: 1px solid #4170b4;
		background: url(../static/images/google.png) no-repeat;
		background-position: 10px 8px;
		background-size: 25px;
		color: #4170b4;
	`}
	${props => props.buttonType === "Facebook" && css`
		border: 1px solid #4170b4;
		background: url(../static/images/facebook.png) no-repeat;
		background-position: 10px 8px;
		background-size: 25px;
		color: #4170b4;
	`}
`;

export default class Buttons extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<Button
			name={this.props.name}
			buttonType={this.props.buttonType}
			top={this.props.top}
			bottom={this.props.bottom}
			>{this.props.title}</Button>
		)
	}
}