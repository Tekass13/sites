let saisieNombre1 = prompt("Saisir un premier nombre");
let nombre1 = Number(saisieNombre1);

let operateur = prompt("Saisir un opérateur");

let saisieNombre2 = prompt("Saisir un second nombre");
let nombre2 = Number(saisieNombre2);

let resultat = 0;

if (operateur === '+') {
  resultat = nombre1 + nombre2;

} else if (operateur === '-') {
  resultat = nombre1 - nombre2;

} else if (operateur === '/') {
  resultat = nombre1 / nombre2;

} else if (operateur === '*') {
  resultat = nombre1 * nombre2;

}

document.write(resultat);
