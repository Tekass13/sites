const reducer = (state, action) => {

    switch (action.type) {

    case "formAnimalInputChange":
        const newSquare = {...state.edittingAnimal};
        newSquare[action.name] = action.value;
        console.log(newSquare, action)
        return {
            ...state,
            edittingSquare: newSquare
        }
    }
}