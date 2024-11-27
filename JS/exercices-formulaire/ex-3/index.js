document.addEventListener('DOMContentLoaded', () => {

    let textDOM = document.querySelector('#task');
    let ulDOM = document.querySelector('#taskList');
    let buttonDOM = document.querySelector('button');

    textDOM.addEventListener('change', (e) => {
        e.preventDefault()
        let li = document.createElement('li');
        li.innerText = e.target.value;
        buttonDOM.addEventListener('click', (e) => {
            e.preventDefault()
            ulDOM.appendChild(li);
        });
    });
});