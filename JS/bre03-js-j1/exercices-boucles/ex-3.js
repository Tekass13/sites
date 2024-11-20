document.addEventListener('DOMContentLoaded', () => {
    let number = 0;
    while (number < 100) {
        number ++;
        if (number % 2 === 0 && number < 50) {
            console.log(number);
        } else if (number % 3 === 0 && number < 100) {
            console.log(number);
        }
        if (number % 2 === 0) {
            console.log(number + ' = pair');
        } else {
            console.log(number + ' = impair');
        }
    }
});