document.addEventListener('DOMContentLoaded', function() {

    let buttonDOM = document.querySelector("#ex4Btn");
    let ulDOM = document.querySelector("#crepe");
    buttonDOM.addEventListener('click', () => {
        let li = document.createElement("li");
        li.innerText = "Beurre";
        ulDOM.appendChild(li);
    });
});