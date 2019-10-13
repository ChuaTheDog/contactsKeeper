import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactItem from '../contacts/ContactItem';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>
				<h1>HOME</h1>
				<ContactForm></ContactForm>
			</div>

			<div>
				<Contacts></Contacts>
			</div>
		</div>
	);
};

export default Home;
