let number = Math.floor(Math.random() * 100);
let win = false;
console.log(number);
while (win === false) {
    let guessTxt = window.prompt('fait toi plaiz, mais que du text ;)');
    let guess = parseInt(guessTxt);
    if (number > guess) {
        window.alert('C\'est plus !');
    } else if (number < guess) {
        window.alert('C\'est moins !');
    } else {
        window.alert('C\'est gagné !');
        win = true;
    }
}