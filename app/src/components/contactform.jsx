import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form'
import '../css/common.css';
import styled from 'styled-components';

const Para = styled.p`
	color: #1270b7;
	font-weight: bold;
	font-size: 18px;
`;

class ContactForm extends Component {
	render() {
		return (
			<div>
			<Para>Sign Up for a demo</Para>
			<Mailchimp
				action="//mc.us5.list-manage.com/subscribe/post?u=67c9c26c29e6f298d5d5b3dcc&id=7e9a814470"
				fields={[
					{
						name: 'FNAME',
						placeholder: 'First Name',
						type: 'text',
						required: true
					},
					{
						name: 'LNAME',
						placeholder: 'Last Name',
						type: 'text',
						required: true
					},
					{
						name: 'MMERGE4',
						placeholder: 'Company',
						type: 'text',
						required: false
					},
					{
						name: 'EMAIL',
						placeholder: 'Email',
						type: 'email',
						required: true
					},
					{
						name: 'MMERGE3',
						placeholder: 'Phone Number',
						type: 'text',
						required: true
					},
					{
						name: 'MMERGE6',
						placeholder: 'Website',
						type: 'text',
						required: true
					}
				]}
				message={
					{
						sending: "Sending...",
						success: "Thank you for your request. We will be in touch shortly to organise your demo.",
						error: "An unexpected internal error has occurred.",
						empty: "You must write an e-mail.",
						duplicate: "Too many subscribe attempts for this email address",
						button: "Request a demo"
					}
				}
			/>
			</div>
		);
	}
}

export default ContactForm;