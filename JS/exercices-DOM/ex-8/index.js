let recipes = {
    ingredients: [
        "300g de farine",
        "3 oeufs",
        "1L de lait",
        "80g de beurre demi-sel"
    ],
    steps : [
        "Faire un nid avec la farine",
        "Casser les oeufs et les placer dans le nid",
        "Battre les oeufs et la farine en ajoutant doucement le lait",
        "Faire fondre le beurre",
        "Ajouter le beurre fondu à la pâte"
    ]
};

const ingredients = document.querySelector('#ingredients');
const steps = document.querySelector('#steps');

document.addEventListener('DOMContentLoaded', () => {
    recipes.ingredients.forEach(element => {
        let li = document.createElement('li');
        let ingredient = document.createTextNode(element);
        li.appendChild(ingredient);
        ingredients.appendChild(li);
    });

    recipes.steps.forEach(element => {
        let li = document.createElement('li');
        let step = document.createTextNode(element);
        li.appendChild(step);
        steps.appendChild(li);
    });
});

