
const TableauContacts = ({contacts, onEditContact}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, i) => 
                    <tr key={i} onClick={() => onEditContact(contact)}>
                        <td>{contact.lastName}</td>
                        <td>{contact.firstName}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TableauContacts;
