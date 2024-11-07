
let saisieFruit = prompt('Poire, Pomme ou Fraise ?');
let fruit = saisieFruit.toLocaleLowerCase();

// La chaine "12" == le nombre 12 retourne true

// La chaine "12" === le nombre 12 retourne false
// Toujours utiliser ===

if (fruit === 'poire') {
    console.log('Je mange une poire');
    
} else if (fruit === 'pomme') {
    console.log('Je mange une pomme');

} else if (fruit === 'fraise') {
    console.log('Je mange une fraise');
    
} else  {
    console.log('Je ne sais pas ce que je mange');
}
