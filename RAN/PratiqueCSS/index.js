// RAPPEL : S'assurer que le DOM est chargé en mémoire avant de jouer avec
/*document.addEventListener('DOMContentLoaded', function() {
    // Exercice 1 : Positionner le carré de 150px vers la droite
    let square = document.querySelector('.red-square');
    square.style.marginLeft = "150px";
    // Exercice 2 : Positionner le carré de 100px vers le bas
    square.style.marginTop = "100px";
    // Exercice 3 : Mettre le symbole 😊 dans le carré
    square.innerHTML = '😊';
    square.style.textAlign = 'center';
     square.style.alignContent = 'center';
    // Exercice 4 : Changer la taille du carré en 300px de largeur et 300px de haut
    square.style.width = '300px';
    square.style.height = '300px';
    // Exercice 5 : Ajouter en image de fond, l'image fournie
    square.style.backgroundImage = 'url(cat.jpg)';
});*/

document.addEventListener('DOMContentLoaded', myFunction);
function myFunction() {
    // Exercice 1 : Positionner le carré de 150px vers la droite
    let square = document.querySelector('.red-square');
    square.style.marginLeft = "150px";
    // Exercice 2 : Positionner le carré de 100px vers le bas
    square.style.marginTop = "100px";
    // Exercice 3 : Mettre le symbole 😊 dans le carré
    square.innerHTML = '😊';
    square.style.textAlign = 'center';
     square.style.alignContent = 'center';
    // Exercice 4 : Changer la taille du carré en 300px de largeur et 300px de haut
    square.style.width = '300px';
    square.style.height = '300px';
    // Exercice 5 : Ajouter en image de fond, l'image fournie
    square.style.backgroundImage = 'url(cat.jpg)';
}