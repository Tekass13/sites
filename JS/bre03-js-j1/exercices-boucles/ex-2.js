document.addEventListener('DOMContentLoaded', () => {
    let number = 0;
    while (number < 10) {
        if (number % 2 === 0) {
            console.log(number + ' = pair');
        } else {
            console.log(number + ' = impair');
        }
        number ++;
    }
});