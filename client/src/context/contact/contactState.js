import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR
} from '../types';
import contactContext from './contactContext';

const ContactState = props => {
	const initialState = {
		contacts: [
			{ id: 1, email: 'dennis@densi.ch', phone: '0124565432', type: 'personal' }
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);
	return (
		<ContactContext.Provider value={{ contacts: state.contacts }}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
