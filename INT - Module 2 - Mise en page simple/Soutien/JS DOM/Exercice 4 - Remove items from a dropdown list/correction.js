document.addEventListener('DOMContentLoaded', function () {
  // Au clic sur le bouton ayant la classe js-remove-button
  // Supprimer l'élément sélectionné dans la liste js-color-selector
  let buttonElement = document.querySelector('.js-remove-button');
  buttonElement.addEventListener('click', function (e) {
    e.preventDefault();
    let selectorElement = document.querySelector('.js-color-selector');
    selectorElement.remove(selectorElement.selectedIndex);
  });
});
