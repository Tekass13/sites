import React from 'react';
import reducer from '../reducer.js';

import FormContact from '../components/FormContact';

const ContactPage = () => {
    const [state, dispatch] = React.useReducer(reducer, {
        contacts: [],
        edittingContact: {
            lastName: '',
            firstName: ''
        }
    });

    React.useEffect(() => {
        const contacts = localStorage.getItem('contacts');
        if (contacts) {
            dispatch({type: 'loadContacts', contacts: JSON.parse(contacts)})
        }
    }, []);

    React.useEffect(() => {
        if (state.contacts.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(state.contacts));
        }
    }, [state.contacts]);

    return (
        <main>
            <h1>Contactes-moi</h1>
            <FormContact state={state.edittingContact} dispatch={dispatch} />
        </main>
    );
};

export default ContactPage;
