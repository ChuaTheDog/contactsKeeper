import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const { id, name, phone, email, type } = contact;

	const onDelete = () => {
		deleteContact(id);
		clearCurrent();
	};
	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{name}{' '}
				<span
					className={
						'badge ' + (type === 'personal' ? 'bg-success ' : 'bg-light ')
					}
				>
					{type}
				</span>
			</h3>
			<ul>
				{email && (
					<li>
						<i className='fas fa-envelope-open' /> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className='fas fa-phone' /> {phone}
					</li>
				)}
			</ul>
			<p>
				<button
					className='btn btn-dark btn-sm'
					onClick={() => setCurrent(contact)}
				>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

export default ContactItem;
