// Affichez tous les nombres compris dans le tableau numbers et ses sous tableaux en utilisant des boucles.
let numbers = [
    29,
    [71, 15, 28],
    35,
    [33, 44],
    [-5, 11, 85],
    56
];

for (let i = 0; i < numbers.length; i++) {
    if (Array.isArray(numbers[i])) {
        for (let j = 0; j < numbers[i].length; j++) {
            console.log(numbers[i][j]);
        }
    } else {
        console.log(numbers[i]);
    }
}
