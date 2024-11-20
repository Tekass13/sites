// V1
/*let somme = 0;
let notes = [12, 12.5 ,6, 19, 5, 5.5];

for (let i=0; i < notes.length; i++) {
    somme += notes[i];
}

let moyenne = somme/notes.length;
document.write(moyenne);*/


// V2
let somme = 0;

let saisieUtilisateur = prompt('Saisir les notes séparée par virgule');
document.write(saisieUtilisateur);

let notes = saisieUtilisateur.split(',');
document.write(notes);

for (let i = 0; i < notes.length; i++) {
    somme = somme + Number(notes[i]);
}

let moyenne = somme / notes.length;
document.write("<br>" + moyenne);

