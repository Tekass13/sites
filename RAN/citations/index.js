document.addEventListener('DOMContentLoaded', () => {
    // Récupère tous les popups
    const popupsDOM = document.querySelectorAll('.js-popup');
    // Récupère tous les boutons
    const menuButtonsDOM = document.querySelectorAll('button');
    // Récupère le bouton de fermeture
    const closeButtonDOM = document.querySelectorAll('.close-button');

    // Pour chaque element avec la classe 'js-popup'
    popupsDOM.forEach((popup, i) => {
        // Lorsque l'on click sur le bouton de fermeture
        closeButtonDOM[i].addEventListener('click', () => {
            // Cache le popup
            popupsDOM[i].style.display = 'none';
        });
    });
    
    // Pour chaque element de la liste des boutons
    menuButtonsDOM.forEach((button, i) => {
        // Lorsque l'on click sur le bouton
        button.addEventListener('click', () => {
            // Affiche le popup de la liste des popups au même index que le bouton
            popupsDOM[i].style.display = 'block';
        });
    });
});
