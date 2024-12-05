let url = 'https://random-word-api.herokuapp.com/word?lang=fr&length=8';

let game = {
    word: '',
    tries: 5,
    letters: [],
};

// Vérifier si la lettre n'a pas déjà été proposée
function verifyLetter(input) {
    let trie = document.querySelector('span');

    // Vérifier si la lettre a déjà été proposée
    const normalizedInput = input.toUpperCase();

    if (game.letters.includes(normalizedInput)) {
        alert('Vous avez déjà proposé cette lettre !');
        return;
    }

    // Ajouter la lettre
    game.letters.push(normalizedInput);

    // Désactiver la touche du clavier virtuel correspondante
    let keys = document.querySelectorAll('#keyboard ul li');
    keys.forEach(key => {
        if (key.textContent === normalizedInput) {
            key.classList.add('disabled');
        }
    });

    let wordLetters = document.querySelectorAll('#word ul li');
    let letterFound = false;

    // Vérifier si la lettre est présente dans le mot
    for (let i = 0; i < game.word.length; i++) {
        if (game.word[i] === input) {
            wordLetters[i].textContent = normalizedInput;
            letterFound = true;
        }
    }

    if (!letterFound) {
        game.tries--;
        trie.textContent = game.tries;
        if (game.tries === 0) {
            alert('Ratéééé !');
        }
    }
    console.log("Lettre pressée:", normalizedInput);
}


// Fonction pour nettoyer le mot (enlever les accents, trémas, etc.)
async function cleanWord(game) {
    let cleanedWord = '';

    for (let i = 0; i < game.word.length; i++) {
        let char = game.word[i];
        switch (char) {
            case 'é':
            case 'è':
            case 'ê':
            case 'ë':
                cleanedWord += 'e';
                break;
            case 'ï':
            case 'î':
                cleanedWord += 'i';
                break;
            case 'ç':
                cleanedWord += 'c';
                break;
            case 'à':
            case 'â':
                cleanedWord += 'a';
                break;
            case 'ô':
                cleanedWord += 'o';
                break;
            case 'ù':
            case 'û':
                cleanedWord += 'u';
                break;
            default:
                cleanedWord += char; 
                break;
        }
        console.log("Caractère traité :", char, "->", cleanedWord);
    }

    // Mettre à jour game.word avec la version nettoyée
    game.word = cleanedWord.toLowerCase();
}


// Récupérer le mot depuis l'API
async function getWord() {
    fetch(url)
        .then(response =>response.json())
        .then(data => game.word = data[0])
        .catch(err => console.error("Erreur:", err));
}


document.addEventListener('DOMContentLoaded', () => {
    // Attendre que le mot soit récupéré avant de commencer le jeu
    getWord().then(() => {
        cleanWord(game).then(() => {
            document.addEventListener('keyup', (e) => {
                // Vérifier si la lettre est valide
                console.log("Mot récupéré:", game.word);
                const letter = e.key.toLowerCase(); 
                verifyLetter(letter);
            });
        })
    });

    // getWord().then(() => {
    //     cleanWord(game);
    //     document.addEventListener('keyup', (e) => {
    //         // Vérifier si la lettre est valide
    //         const letter = e.key.toLowerCase(); 
    //         verifyLetter(letter);
    //     });
    // });
});
