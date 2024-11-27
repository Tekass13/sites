let grades = [
	[12, 11, 18],
	[13, 17, 9],
	[10, 15, 8],
	[14, 18, 13]
];

let averages = [];

for(let i = 0; i < grades.length; i++) // je parcours le tableau
{
	let sum = 0; // je créé une variable pour la somme
  for(let j = 0; j < grades[i].length; j++) // je parcours chqwue sous tableau
  {
  	sum += grades[i][j]; // j'ajoute chaque valeur à la somme
  }
  
  let average = sum / grades[i].length; // je calcule la moyenne
  averages.push(average); // je l'ajoute au tableau des moyennes
}

console.log(averages);
