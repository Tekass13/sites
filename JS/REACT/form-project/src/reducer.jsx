const reducer = (state, action) => {
    switch (action.type) {
        case "loadContact":
            return { ...state, contact: action.contact };
        case "formInputChange":
            const newUser = { ...state.edittingUser, [action.name]: action.value };
            return { ...state, edittingUser: newUser };
        case "new":
            return {
                ...state,
                edittingUser: { name: "", firstName: "", phone: 0, email: "" },
            };
        case "edit":
            return { ...state, edittingUser: action.user };
        case "create":
            const newUserWithId = {
                id: state.contact.length + 1,
                ...action.user,
            };
            return { ...state, contact: [...state.contact, newUserWithId] };
        case "update":
            const updatedContacts = state.contact.map((user) =>
                user.id === action.user.id ? action.user : user
            );
            return { ...state, contact: updatedContacts };
        case "delete":
            return {
                ...state,
                contact: state.contact.filter((user) => user.id !== action.id),
            };
        default:
            return state;
    }
};

export default reducer;
