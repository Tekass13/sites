document.addEventListener('DOMContentLoaded', function () {
  // Changer la couleur de fond de chaque paragraphe
  const para = document.querySelectorAll('p');
  para.forEach((element, i) => {
      console.log(element);
      element.style.backgroundColor = 'blue';
  });
});
