document.addEventListener('DOMContentLoaded', function () {
  // Lorsque l'utilisateur saisi le rayon dans le champ radius
  // Puis clique sur le bouton "Calculate"
  // Calculer le volume d'une sphère et mettre le résultat dans le champ volume
  // ASTUCE : volume sphère = (4/3) * PI * (rayon puissance 3)
  let buttonElement = document.querySelector('.js-submit-button');
  buttonElement.addEventListener('click', function (e) {
    e.preventDefault();
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
  });
});
