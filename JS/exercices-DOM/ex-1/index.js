document.addEventListener('DOMContentLoaded', function() {

    let buttonDOM = document.querySelector("#ex1Btn")
    
    buttonDOM.addEventListener('click', (e) => {
        window.alert('Vous avez cliqué sur le bouton');
    });
});