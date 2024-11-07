/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il s'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.

// Cellules
const cellDOM = document.querySelectorAll('.js-cell');
// Grille
const checkerboardDOM = document.querySelector(".checkerboard");
// Bobby
const bobbyDOM = document.querySelector(".bobby");
// Chat
const catDOM = document.querySelector(".cat");
// Toolbox
const toolboxDOM = document.querySelector(".toolbox");
// Damier
const damierDOM = document.querySelector(".js-damier");
// Disco
const discoDOM = document.querySelector(".js-disco");
// Labyrinthe
const labyrinthDOM = document.querySelector(".js-labyrinth");
// Couleurs grille disco
const discoClasses = ['disco-color1', 'disco-color2', 'disco-color3', 'disco-color4', 'disco-color5'];
// Shéma labyrinthe
const maze = [
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1]
];
/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

// Les fonctions (appelées par les Event Listener) sont déclarées ici.
function clearCheckerboard() {
  cellDOM.forEach(cell => {
    // Supprime toutes les classes de couleur pour nettoyer l'état
    cell.classList.remove('push', 'pull', 'boom', 'black', 'disco-color1', 'disco-color2', 'disco-color3', 'disco-color4', 'disco-color5');
  });
}

function createDamier() {

  cellDOM.forEach((cell, i) => {
    // Calculer la position x et y en fonction de l'index
    const row = Math.floor(i / Math.sqrt(cellDOM.length));
    const col = Math.floor(i % Math.sqrt(cellDOM.length));

    // Appliquer une classe en fonction de la couleur
    if ((row + col) % 2 === 0) {
      cell.classList.add('black'); // Classe pour la couleur noire
    }
  });
}

function createDisco() {
  cellDOM.forEach(cell => {
    // Choisir une classe aléatoire parmi les classes du tableau
    const randomClass = discoClasses[Math.floor(Math.random() * discoClasses.length)];
    // Applique la classe de couleur aléatoire
    cell.classList.add(randomClass);
  });
}

function createLabyrinth() {
  maze.forEach((row, i) => {
    row.forEach((cellValue, j) => {
      // Calculer l'index de la cellule dans cellDOM
      const cell = cellDOM[i * 8 + j];
      if (cellValue === 1) {
        // Applique la classe de couleur noir
        cell.classList.add('black');
      }
    });
  });
}

function showPush(cell) {
  cell.classList.add('push');
}

function showPull(cell) {
  cell.classList.remove('push');
  cell.classList.add('pull');
}

function showBoom(cell) {
  cell.classList.remove('pull');
  cell.classList.add('boom');
}

function moveBobby(key) {
  const step = 3; // Taille du déplacement en em
  let bobbyPos = {
    top: 0,
    left: 0
  };
  // Déplacer le chat en fonction de la direction aléatoire
  switch (key) {
    case 'KeyW':
      bobbyPos.top -= step;
      bobbyDOM.style.marginTop = bobbyPos.top + 'em';
      break;
    case 'KeyS':
      bobbyPos.top += step;
      bobbyDOM.style.marginTop = bobbyPos.top + 'em';
      break;
    case 'KeyA':
      bobbyPos.left -= step;
      bobbyDOM.style.marginLeft = bobbyPos.left + 'em';
      break;
    case 'KeyD':
      bobbyPos.left += step;
      bobbyDOM.style.marginLeft = bobbyPos.left + 'em';
      break;
  }
}

function moveCat() {
  const step = 3; // Taille du déplacement en em

  // Générer une direction aléatoire (haut, bas, gauche, droite)
  const directions = ['up', 'down', 'left', 'right'];
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  let catPos = {
    left: 0,
    top: 0
  };
  // Déplacer le chat en fonction de la direction aléatoire
  switch (randomDirection) {
    case 'up':
      catPos.top -= step;
      catDOM.style.marginTop = catPos.top + 'em';
      break;
    case 'down':
      catPos.top += step;
      catDOM.style.marginTop = catPos.top + 'em';
      break;
    case 'left':
      catPos.left -= step;
      catDOM.style.marginLeft = catPos.left + 'em';
      break;
    case 'right':
      catPos.left += step;
      catDOM.style.marginLeft = catPos.left + 'em';
      break;
  }
}

// Lorsque l'on clique sur l'icone damier
function onDamierClick() {
  // Réinitialise la grille
  clearCheckerboard();
  // Crée un damier dans la grille
  createDamier();
}

// Lorsque l'on clique sur l'icone disco
function onDiscoClick() {
  // Réinitialise la grille
  clearCheckerboard();
  // Crée une grille de couleurs aleatoires
  createDisco();
}

// Lorsque l'on clique sur l'icone labyrinthe
function onLabyrinthClick() {
  // Réinitialise la grille
  clearCheckerboard();
  // Crée un labyrinthe dans la grille
  createLabyrinth();
}
/**************************************************************/
/*                      Event listeners                       */
/**************************************************************/

// Les Event Listener sont déclarés ici.

// 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
damierDOM.addEventListener('click', (e) => {
  // Afficher un damier dans la grille
  // TIP : Ajouter la classe .black sur les cases concernées
  onDamierClick();
});

// 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
discoDOM.addEventListener('click', (e) => {
  // Afficher un dancefloor de lumières dans la grille
  // TIP : Ajouter les classes .color1, ... .color5 aléatoirement
  onDiscoClick();
});

// 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
labyrinthDOM.addEventListener('click', (e) => {
  // Afficher le motif présent sur le bouton dans la grille
  // TIP : Ajouter la classe .black sur les cases concernées
  onLabyrinthClick();
});

// 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
cellDOM.forEach(cell => {
  cell.addEventListener('mousedown', (e) => {
    // Afficher "push" sur fond jaune (utiliser la classe "push")
    showPush(cell);
  });

  cell.addEventListener('mouseup', (e) => {
    // Afficher "pull" sur fond orange (utiliser la classe "pull")
    showPull(cell);
  });

  cell.addEventListener('dblclick', (e) => {
    // Afficher "boom" sur fond rouge (utiliser la classe "boom")
    showBoom(cell);
  });
});


// 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
document.addEventListener('keydown', (e) => {
  // Afficher bobby quand l'utilisateur appuie sur la touche B
  let key = e.code;
  if (key === 'KeyB') {
    bobbyDOM.classList.add('visible');
    moveBobby(key);
  }
  // Le déplacer de case en case
  // dans la direction de la touche appuyée
});

// 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau
setInterval(moveCat, 1000);
// TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
// dans une direction aléatoire toutes les secondes


/**************************************************************/
/*                       Main Program                         */
/**************************************************************/

// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.

document.addEventListener('DOMContentLoaded', () => {
  console.log('Damier');
});
