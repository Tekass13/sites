document.addEventListener('DOMContentLoaded', function () {
  // Changer la couleur de fond de chaque paragraphe
  let paragraphesElements = document.querySelectorAll('p');

  for (let i = 0; i < paragraphesElements.length; i++) {
    let pElement = paragraphesElements[i];

    pElement.style.background = 'rgb(255, 0, 120)';
  }
});
