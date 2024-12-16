
const FormContact = ({state, dispatch}) => {
    const handleChange = (event) => {
        const { value, name } = event.target;

        dispatch({type: 'formContactInputChange', name, value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (state.id > 0) {
            dispatch({type: 'updateContact', contact: state});
            return;
        }

        dispatch({type: 'createContact', contact: state});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="lastNameId">Nom</label>
            <input type="text" name="lastName" id="lastNameId" value={state.lastName} onChange={handleChange} />

            <label htmlFor="firstNameId">Prénom</label>
            <input type="text" name="firstName" id="firstNameId" value={state.firstName} onChange={handleChange} />

            <button>Enregistrer</button>
        </form>
    );
}

export default FormContact;
