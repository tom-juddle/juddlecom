import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form'

class ContactForm extends Component {
	render() {
		return (
			<Mailchimp
				action="//mc.us5.list-manage.com/subscribe/post?u=67c9c26c29e6f298d5d5b3dcc&id=7e9a814470"
				fields={[
					{
						name: 'first_name',
						placeholder: 'First Name',
						type: 'text',
						required: true
					},
					{
						name: 'last_name',
						placeholder: 'Last Name',
						type: 'text',
						required: true
					},
					{
						name: 'company',
						placeholder: 'Company',
						type: 'text',
						required: false
					},
					{
						name: 'email',
						placeholder: 'Email',
						type: 'email',
						required: true
					},
					{
						name: 'phone',
						placeholder: 'Phone Number',
						type: 'text',
						required: true
					},
					{
						name: 'website',
						placeholder: 'Website',
						type: 'text',
						required: true
					}
				]}
			/>
		);
	}
}

export default ContactForm;