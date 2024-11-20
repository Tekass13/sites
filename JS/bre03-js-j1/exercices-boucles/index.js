document.addEventListener('DOMContentLoaded', () => {
    let number = 0;
    while (number < 10) {
        number ++;
        console.log(number);
    }

    number = 25;
    while (number >= 20) {
        number --;
        console.log(number);
    }

    number = 0;
    while (number < 20) {
        number ++;
        console.log(number);
        if (number % 2 === 0) {
            console.log(number + ' = pair');
        }
    }
});