import React from 'react';

const ContactItem = ({ contact }) => {
	const { id, name, phone, email, type } = contact;
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
				<button className='btn btn-dark btn-sm'>Edit</button>
				<button className='btn btn-danger btn-sm'>Delete</button>
			</p>
		</div>
	);
};

export default ContactItem;
