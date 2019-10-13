import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, current } = contactContext;
	const [contact, setContact] = useState(
		{
			name: '',
			email: '',
			phone: '',
			type: 'personal'
		},
		[contactContext, current]
	);

	const { name, email, phone, type } = contact;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal'
			});
		}
	});
	const onChange = e =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		addContact(contact);
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal'
		});
	};
	return (
		<form onSubmit={onSubmit}>
			<h2 className='primary'>{current ? 'edit contact' : 'add contact'}</h2>
			<input
				type='text'
				name='name'
				placeholder='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='email'
				name='email'
				placeholder='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				name='phone'
				placeholder='phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>infos</h5>
			<input
				type='radio'
				name=''
				id=''
				value='personal'
				onChange={onChange}
				checked={type === 'personal'}
			/>{' '}
			Persoanl{' '}
			<input
				type='radio'
				name=''
				id=''
				value='professional'
				onChange={onChange}
				checked={type === 'professional'}
			/>{' '}
			professional{' '}
			<button type='submit' className='btn btn-default btn-block'>
				submit
			</button>
		</form>
	);
};

export default ContactForm;
