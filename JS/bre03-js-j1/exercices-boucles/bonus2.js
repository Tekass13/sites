let guessTxt = window.prompt('Choisissez un nombre entre 0 et 10000');
let guess = parseInt(guessTxt);
let win = false;
let number= 0;
let tentatives = 0;

while (win === false) {
    number = Math.floor(Math.random() * 10000);
    tentatives += 1;
    if (tentatives < 100) {
        if (number !== guess) {
            console.log(guess, number, tentatives);
        } else {
            window.alert('gagné !');
            console.log(guess, number, tentatives);
            win = true;
        }
    }
    else {
        window.alert('Wooooo comme t\'es nuuuul !! 🤣');
        console.log(guess, number, tentatives);
        win = true;
    }
}
    