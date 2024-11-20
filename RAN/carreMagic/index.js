// Ce tableau contient la couleur de fond de chaque élément :
// l'élément 0 aura red, l'élément 1 aura blue, ...
let colors = ['red', 'blue', 'yellow', 'green', 'salmon', 'orange', 'purple', 'pink', 'navy', 'gold'];

// Ce tableau contient la position top/left de chaque élément :
// l'élément 0 aura top/left 1 à 1, l'élément 1 aura top/left à 2, ...
let positions = [1, 2, 9, 4, 5, 8, 3, 10, 6, 7];

/******************************** TODO  ********************************/
// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (){
   // Récupérer TOUS les éléments ayant la classe js-magic-square
   const squares = document.querySelectorAll('.js-magic-square');
   
   // Pour chaque élément de la liste précédente
   squares.forEach((square, i) => {

   // Récupérer la position depuis le tableau positions
   const position = positions[i];
   
   // Affecter à la propriété de style top : la position concaténée avec l'unité 'em'
   square.style.top = `${position}em`;
    
   // Affecter à la propriété de style left : la position concaténée avec l'unité 'em'
   square.style.left = `${position}em`;
   
   // Récupérer la couleur de fond de l'élement depuis le tableau colors
   const backgroundColor = colors[i];
   
   // Affecter la couleur à la propriété de style background
   square.style.backgroundColor = backgroundColor;
   });
});

// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
/*document.addEventListener('DOMContentLoaded', function (){
   // Récupérer TOUS les éléments ayant la classe js-magic-square
   const squares = document.querySelectorAll('.js-magic-square');
   
   // Pour chaque élément de la liste précédente
   for (let i = 0; i < squares.length; i++) {
   // Récupérer la position depuis le tableau positions
   const position = positions[i];
   
   // Affecter à la propriété de style top : la position concaténée avec l'unité 'em'
   squares[i].style.top = `${position}em`;
    
   // Affecter à la propriété de style left : la position concaténée avec l'unité 'em'
   squares[i].style.left = `${position}em`;
   
   // Récupérer la couleur de fond de l'élement depuis le tableau colors
   const backgroundColor = colors[i];
   
   // Affecter la couleur à la propriété de style background
   squares[i].style.backgroundColor = backgroundColor;
   }
});*/