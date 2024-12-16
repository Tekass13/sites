import React from "react";

const TableauContact = ({ contact, onEditUser, onDeleteUser }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contact.map((user, i) => (
                    <tr key={i}>
                        <td onClick={() => onEditUser(user)}>{user.name}</td>
                        <td onClick={() => onEditUser(user)}>{user.firstName}</td>
                        <td onClick={() => onEditUser(user)}>{user.phone}</td>
                        <td onClick={() => onEditUser(user)}>{user.email}</td>
                        <td>
                            <button onClick={() => onDeleteUser(user.id)}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableauContact;
