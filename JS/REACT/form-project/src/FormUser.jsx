import React from "react";

const FormUser = ({ state, dispatch }) => {
    const handleChange = (event) => {
        const { value, name } = event.target;
        dispatch({ type: "formInputChange", name, value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (state.id > 0) {
            dispatch({ type: "update", user: state });
            return;
        }

        dispatch({ type: "create", user: state });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
            <input
                type="text"
                name="name"
                id="nameId"
                value={state.name}
                onChange={handleChange}
            />

            <label htmlFor="firstName">Prénom</label>
            <input
                type="text"
                name="firstName"
                id="firstNameId"
                value={state.firstName}
                onChange={handleChange}
            />

            <label htmlFor="phone">Téléphone</label>
            <input
                type="number"
                min="0"
                name="phone"
                id="phoneId"
                value={state.phone}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="emailId"
                value={state.email}
                onChange={handleChange}
            />

            <button>Enregistrer</button>
        </form>
    );
};

export default FormUser;
