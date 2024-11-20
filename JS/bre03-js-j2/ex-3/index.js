//Dans la variable sum, calculer la somme de tous les nombres du tableau numbers en le parcourant avec une boucle puis afficher la variable sum.
let numbers = [10, 11, 15, 6];
let sum = 0;

for (let number of numbers) {
    sum += number;
    console.log(sum);
}
