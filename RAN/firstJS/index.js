document.addEventListener('DOMContentLoaded', function () {
    // Exercice 1 : Sélectionner et afficher le footer en utilisant sa classe
    let footerDOM = document.querySelector('.footer');
    console.log(footerDOM);
    
    // Exercice 2 : Sélectionner et afficher le paragraphe à l'intérieur du footer
    let paragrapheDOM = document.querySelector('.footer p');
    console.log(paragrapheDOM);

    // Exercice 3 : Sélectionner et afficher tous les paragraphes de la page
    let allParaDOM = document.querySelectorAll('p');
    console.log(allParaDOM);

    // Exercice 4 : Sélectionner et afficher les paragraphes du premier article
    let firstArcticleDOM = document.querySelectorAll('article:first-child p');
    console.log(firstArcticleDOM);

    // Exercice 5 : Sélectionner le dernier paragraphe du 1er article
    let lastArcticleDOM = document.querySelectorAll('article:first-of-type p:last-of-type');
    console.log(firstArcticleDOM);
});
