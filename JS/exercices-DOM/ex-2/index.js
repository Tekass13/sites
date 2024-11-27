document.addEventListener('DOMContentLoaded', function() {

    let buttonDOM = document.querySelector("#ex2Btn");
    let h2DOM = document.querySelector("h2");

    buttonDOM.addEventListener('click', () => {
        h2DOM.style.color = "var(--purple)";
    });
});