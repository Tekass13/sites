/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif est de créer un télégraphe.
Cela consiste à convertir un texte alphanumérique en code morse.
Les espaces seront gardés tel quels.

TODO
- Demander à l'utilisateur de saisir un texte à télégraphier
- Convertir le texte en code morse
- Afficher le code morse dans la console

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
let codeMorse = [
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
  "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
  "-----"
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
let userInput = prompt("Saisissez le texte à télégraphier :");

let morseOutput = "";

for (let i = 0; i < userInput.length; i++) {
    let char = userInput[i].toLowerCase();
    let index = alphabet.indexOf(char);

    if (index !== -1) {
        morseOutput += codeMorse[index] + " ";
    } else if (char === ' ') {
        morseOutput += ' ';
    }
}

console.log("Code Morse :", morseOutput.trim());


