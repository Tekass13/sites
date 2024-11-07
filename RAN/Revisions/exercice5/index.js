document.addEventListener('DOMContentLoaded', function() {

  let radius = document.querySelector('#radius');
  let volumeField = document.querySelector('#volume');
  let button = document.querySelector('button');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    let r = parseFloat(radius.value);
    if (isNaN(r) || r <= 0) {
      volumeField.value = "Veuillez entrer un rayon valide.";
    }
    else {
      let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
      volumeField.value = volume.toFixed(2);
    }
  });
});
