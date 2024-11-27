document.addEventListener('DOMContentLoaded', () => {

    let textDOM = document.querySelector('#text');
    let pDOM = document.querySelector('#textPreview');

    textDOM.addEventListener('change', (e) => {
        pDOM.textContent = e.target.value;
    });

});