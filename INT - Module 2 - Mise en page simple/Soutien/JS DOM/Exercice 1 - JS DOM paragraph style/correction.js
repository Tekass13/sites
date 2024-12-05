document.addEventListener('DOMContentLoaded', function () {

  // Au clic sur le bouton ayant la classe js-submit-button
  let buttonElement = document.querySelector('.js-submit-button');
  buttonElement.addEventListener('click', function () {

    // Changer la taille, famille et couleur de la police
    // de l'élément ayant la classe js-text
    let textElement = document.querySelector('.js-text');
    textElement.style.fontFamily = 'monospace';
    textElement.style.color = 'pink';
    textElement.style.fontSize = '4rem';
  });
});
