document.addEventListener('DOMContentLoaded', () => {

    let buttonDOM = document.querySelector('button');

    buttonDOM.addEventListener('click', () => {
        alert("Le formulaire a été soumis !");
    });
});