const pinkTabButton = document.querySelector('#pinkTabButton');
const blueTabButton = document.querySelector('#blueTabButton');
const pinkTab = document.querySelector('#pinkTab');
const blueTab = document.querySelector('#blueTab');
let alreadyActived = false;

function changeColor(visible, hide) {
    if (visible.classList.contains('active')) {
        alreadyActived = true;
    } else {;
        alreadyActived = false;
        visible.classList.toggle('active');
        hide.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    pinkTabButton.addEventListener('click', (e) => {
        changeColor(pinkTab, blueTab);
    });

    blueTabButton.addEventListener('click', (e) => {
        changeColor(blueTab, pinkTab);
    });

});