document.addEventListener('DOMContentLoaded', function() {

    let buttonDOM = document.querySelector("#ex3Btn");
    let gridDOM = document.querySelector("#grid");

    buttonDOM.addEventListener('click', () => {
        gridDOM.classList.toggle('grid-3');
    });
});