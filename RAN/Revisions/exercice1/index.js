document.addEventListener('DOMContentLoaded', function () {
  // Au clic sur le bouton ayant la classe js-submit-button
  const submit = document.querySelector('.js-submit-button');
  let text = document.querySelector('.js-text');
  submit.addEventListener('click', (e) => {
    // Changer la taille, famille et couleur de la police
    // de l'élément ayant la classe js-text
    text.style.fontFamily = 'Verdana, sans-serif';
    text.style.fontSize = '2em';
    text.style.color = 'blue';
  });
});
