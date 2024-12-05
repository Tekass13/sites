const color = document.querySelector('#color');
const size = document.querySelector('#size');
const header = document.querySelector('article header');
const section = document.querySelector('article section');

function selectColor() {
    if (color.value === 'pink') {

        header.classList.toggle('blue');
        header.classList.toggle('pink');
    } else {

        header.classList.toggle('pink');
        header.classList.toggle('blue');
    }
}

function selectSize() {
    if (size.value === 'small') {

        section.classList.toggle('small');
        section.classList.toggle('big');

    } else {

        section.classList.toggle('big');
        section.classList.toggle('small');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    color.addEventListener('change', (e) => {
        selectColor();
    });
    size.addEventListener('change', (e) => {
        selectSize();
    });
});