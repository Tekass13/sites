const color = document.querySelector('#color');
const size = document.querySelector('#size');
const header = document.querySelector('article header');
const section = document.querySelector('article section');

function selectColor() {
    if (color.value === 'pink') {

        header.classList.add('pink');
        header.classList.remove('blue');
        
    } else if (color.value === 'blue') {

        header.classList.add('blue');
        header.classList.remove('pink');
    }
}

function selectSize() {
    if (size.value === 'small') {

        header.classList.add('small');
        header.classList.remove('big');

    } else if (size.value === 'big') {

        section.classList.add('big');
        section.classList.remove('small');
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