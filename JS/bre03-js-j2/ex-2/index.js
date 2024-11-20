
let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];


// pour le tableau animals_even : afficher les animaux dont la clé est un nombre pair
for (let i = 0; i < animals_even.length; i++) {
    if (i % 2 === 0) {
        console.log(animals_even[i]); 
    }
}

// pour le tableau animals_odd : afficher les animaux dont la clé est un nombre impair
for (let i = 0; i < animals_odd.length; i++) {
    if (i % 2 === 1) {
        console.log(animals_odd[i]); 
    }
}
