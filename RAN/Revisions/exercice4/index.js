document.addEventListener('DOMContentLoaded', function() {
  // Au clic sur le bouton ayant la classe js-remove-button
  const button = document.querySelector('.js-remove-button');
  button.addEventListener('click', (e) => {
    // ASTUCE : Pour empêcher le rafraichissement de la page lors du clic sur le bouton,
    // utiliser la fonction preventDefault sur l'événement click
    e.preventDefault();
    // Supprimer l'élément sélectionné dans la liste js-color-selector
    const selector = document.querySelectorAll('.js-color-selector');
    selector.forEach((element, i) => {
      element[i].remove();
      console.log(element);
    });
  });
});
