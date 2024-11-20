document.addEventListener('DOMContentLoaded', () => {
    
    // Récupère l'élément avec la classe js-number-input
    let inputNumber = document.querySelector('.js-number-input');
    // Initialise la valeur par default
    let currentValue = inputNumber.value;
    // Récupère l'élément avec la classe js-number-display
    let displayNumber = document.querySelector('.js-number-display');
    
    // Affiche la valeur par default
    displayNumber.textContent = currentValue;

    // Mise à jour de la valeur en fonction de la position du curseur
    inputNumber.addEventListener('change', (e) => {
        // Definit la valeur actuelle
        currentValue = e.target.value;
        // Affiche la valeur actuelle
        displayNumber.textContent = currentValue;
    });
});
