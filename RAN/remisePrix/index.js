let saisie = prompt('Saisissez vos nombres séparés par une virgule.');
let prix = saisie.split(',');
for (let i=0; i < prix.length; i++) {
    prix[i] -= Number(prix[i] * .1);
    document.write("<br>prix = " + prix[i]);
}