
const reducer = (state, action) => {

    switch (action.type) {
        case "loadAnimaux":
            console.log(state, action.animaux)
            return {
                ...state,
                animaux: action.animaux
            }
        case "loadContacts":
            return {
                ...state,
                contacts: action.contacts
            }
        case "formAnimalInputChange":
            const newAnimal = {...state.edittingAnimal};
            newAnimal[action.name] = action.value;
            console.log(newAnimal, action)
            return {
                ...state,
                edittingAnimal: newAnimal
            }

        case "formContactInputChange":
            const newContact = {...state.edittingContact};
            newContact[action.name] = action.value;
            console.log(newContact, action)
            return {
                ...state,
                edittingContact: newContact
            }
        case "newAnimal":
            return {...state, edittingAnimal: {
                famille: '',
                espece: '',
                age: 0,
                prenom: ''
            }};
        case "editAnimal":
            return {...state, edittingAnimal: action.animal};
        case "createAnimal":
            const animal = {
                id: state.animaux ? state.animaux.length + 1 : 1,
                ...action.animal
            };
            return {
                ...state,
                animaux: state.animaux ? [...state.animaux, animal] : [animal]
            };
        case "updateAnimal":
            const animaux = [...state.animaux];
            const animalIndexToUpdate = state.animaux.findIndex((elt) => elt.id === action.animal.id);
            animaux[animalIndexToUpdate] = action.animal;
            return {
                ...state,
                animaux: [...animaux]
            };
        case "editContact":
            return {...state, edittingContact: action.contact};
        case "createContact":
            const contact = {
                id: state.contacts ? state.contacts.length + 1 : 1,
                ...action.contact
            };
            return {
                ...state,
                contacts: state.contacts ? [...state.contacts, contact] : [contact]
            };
        case "updateContact":
            const contacts = [...state.contacts];
            const contactIndexToUpdate = state.contacts.findIndex((elt) => elt.id === action.contact.id);
            contacts[contactIndexToUpdate] = action.contact;
            return {
                ...state,
                contacts: [...contacts]
            };
    }
};

export default reducer;
