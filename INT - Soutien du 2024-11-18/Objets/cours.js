
let nom = "Durant";
let prenom = "Jérôme";
let age = 25;

let nom2 = "Tata";
let prenom2 = "Maxime";
let age2 = 13;

let personne = {
    nom: "Durant",
    prenom: "Jérôme",
    age: 25,
};

let personne2 = {
    nom: "Tata",
    prenom: "Maxime",
    age: 13,
}

// Affiche le contenu de l'objet
console.log(personne);

// Lire la propriété d'un objet
console.log(personne['nom']);
console.log(personne.nom);// Ecriture 2 la plus utilisée

// Modifier la propriété d'un objet
personne['nom'] = 'Martin';
personne.nom = 'Martin';// Ecriture 2 la plus utilisée

console.log(personne['nom']);

// Parcourir un objet
const keys = Object.keys(personne);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    const currentValue = personne[currentKey];
    
    console.log(`Key: ${currentKey}, Value: ${currentValue}`);
}
// 2nde méthode
for(const key in personne) {
    const value = personne[key];
    
    console.log(`Key: ${key}, value: ${value}`);
}
