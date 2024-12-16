import React, { useReducer, useEffect } from "react";
import TableauContact from "./TableauContact.jsx";
import FormUser from "./FormUser.jsx";
import reducer from "./reducer.jsx";

const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        contact: [],
        edittingUser: { name: "", firstName: "", phone: 0, email: "" },
    });

    useEffect(() => {
        const contact = localStorage.getItem("contact");
        if (contact) {
            dispatch({ type: "loadContact", contact: JSON.parse(contact) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contact", JSON.stringify(state.contact));
    }, [state.contact]);

    const handleNewUser = () => dispatch({ type: "new" });
    const handleEditUser = (user) => dispatch({ type: "edit", user });
    const handleDeleteUser = (id) => dispatch({ type: "delete", id });

    return (
        <React.Fragment>
            <FormUser dispatch={dispatch} state={state.edittingUser} />
            <button onClick={handleNewUser}>Ajouter</button>
            <TableauContact
                contact={state.contact}
                onEditUser={handleEditUser}
                onDeleteUser={handleDeleteUser}
            />
        </React.Fragment>
    );
};

export default App;
