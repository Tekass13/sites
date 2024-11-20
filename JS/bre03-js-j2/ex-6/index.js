// Dans la variable average, calculer la moyenne de toutes les notes des tableaux imbriqués dans grades en les parcourant avec des boucles puis afficher la variable average.
let grades = [
    [20, 10],
    [15, 20],
    [13, 18],
];

let total = 0;
let count = 0;

for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < grades[i].length; j++) {
        total += grades[i][j];
        count++;
    }
}

let average = total / count;
console.log("La moyenne est : ", average);