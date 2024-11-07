// 1. Au premier clic, mettre la couleur de fond du carré à rouge

// 2. Au second clic, mettre la couleur de fond du carré à bleu

// 3. Au troisième clic, remettre la couleur de fond par défaut

// 4. Au quatrième clic, on reboucle à 1.

// etc...

document.addEventListener('DOMContentLoaded', function() {

    const buttonDOM = document.querySelector('.js-button');
    const squareDOM = document.querySelector('.js-square');
    let nbClick = 0;

    buttonDOM.addEventListener('click', (e) => {
        nbClick += 1;
        if (nbClick === 1) {
            squareDOM.style.backgroundColor = "red";
        }
        else if (nbClick === 2) {
            squareDOM.style.backgroundColor = "blue";
        }
        else {
         squareDOM.style.backgroundColor = "";
            nbClick = 0;
        }
    });
});
