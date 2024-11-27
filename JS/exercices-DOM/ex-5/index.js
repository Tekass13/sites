const section = document.querySelector('section');
const button = document.querySelector('#readMore');
let open = false;

function toggleSection() {
    if (!open) {
        section.classList.toggle('short');
        section.classList.toggle('long');
        button.textContent = "Reduire";
        open = true
    } else {
        section.classList.toggle('long');
        section.classList.toggle('short');
        button.textContent = "En savoir plus";
        section = false
    }
}

document.addEventListener('DOMContentLoaded', () => {

    button.addEventListener('click', (e) => {
        toggleSection();
    });
});