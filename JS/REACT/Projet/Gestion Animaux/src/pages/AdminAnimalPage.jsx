import React from 'react';
import reducer from '../reducer.js';

import FormAnimal from '../components/FormAnimal.jsx';
import TableauAnimaux from '../components/TableauAnimaux.jsx';

const AdminAnimalPage = () => {
    const [state, dispatch] = React.useReducer(reducer, {
        animaux: [],
        edittingAnimal: {
            famille: '',
            espece: '',
            age: 0,
            prenom: ''
        }
    });

    React.useEffect(() => {
        const animaux = localStorage.getItem('animaux');
        console.log('get', animaux)
        if (animaux) {
            dispatch({type: 'loadAnimaux', animaux: JSON.parse(animaux)})
        }
    }, []);

    React.useEffect(() => {
        console.log('set', state.animaux)
        if (state.animaux.length > 0) {
            localStorage.setItem('animaux', JSON.stringify(state.animaux));
        }
    }, [state.animaux]);

    const handleNewAnimal = () => {
        dispatch({type: 'newAnimal'});
    }

    const handleEditAnimal = (animal) => {
        console.log(animal)
        dispatch({type: 'editAnimal', animal});
    }

    return (
        <main>
            <h1>Administration des animaux</h1>
            <FormAnimal dispatch={dispatch} state={state.edittingAnimal} />
            <button onClick={handleNewAnimal}>Ajouter</button>
            <TableauAnimaux animaux={state.animaux} onEditAnimal={handleEditAnimal} />
        </main>
    );
}

export default AdminAnimalPage;
