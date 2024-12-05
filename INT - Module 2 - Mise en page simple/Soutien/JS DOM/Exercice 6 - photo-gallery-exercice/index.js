/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de réaliser une galerie photo
avec deux flèches gauche et droite pour naviguer entre les photos.
Le code doit être compréhensible et simple (utiliser des fonctions pour se faire).

Exemple d'algorithme (pour t'aider) :
- Create the HTML Element for one photo
- Create the HTML Element for left button
- Create the HTML Element for right button
- Manage the photo visibility :
 - Will hide all photos
 - And show the selected one
- Select the photo to display : called when the user clic on left / right buttons
- Create the gallery with the photos and the buttons
- Launch the gallery (display the first photo)

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

let photoDataList = [
  {
    src: 'https://www.w3schools.com/w3images/fjords.jpg',
    alt: 'Fjords',
    width: '600',
    height: '400'
  },
  {
    src: 'https://www.w3schools.com/w3images/lights.jpg',
    alt: 'Northern Lights',
    width: '600',
    height: '400'
  },
  {
    src: 'https://www.w3schools.com/w3images/mountains.jpg',
    alt: 'Mountains',
    width: '600',
    height: '400'
  },
  {
    src: 'https://www.w3schools.com/w3images/forest.jpg',
    alt: 'Forest',
    width: '600',
    height: '400'
  }
];
/**************************************************************/
/*                         Functions                          */
/**************************************************************/

// Les fonctions seront implémentées ici...

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// La galerie sera lancée ici (en affichant la première photo)...
