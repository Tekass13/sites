import React from 'react';
import reducer from '../reducer.js';

import FormContact from '../components/FormContact.jsx';
import TableauContacts from '../components/TableauContacts.jsx';

const AdminContactPage = () => {
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

    const handleEditContact = (contact) => {
        console.log(contact)
        dispatch({type: 'editContact', contact});
    }

    return (
        <main>
            <h1>Administration des contacts</h1>
            <FormContact state={state.edittingContact} dispatch={dispatch} />
            <TableauContacts contacts={state.contacts} onEditContact={handleEditContact} />
        </main>
    );
}

export default AdminContactPage;
