document.addEventListener('DOMContentLoaded', () => {
    
    document.addEventListener('keydown', (e) => {
        let key = e.code
        
        // Si la touche appuyée est N, afficher Nord dans le carré ET mettre en fond la couleur bleu glace
        let square = document.querySelector('.square');
        
        if (key === 'KeyN') {
            square.textContent = 'Nord';
            square.style.backgroundColor = '#e2fcfb';
        }
        // Si la touche appuyée est E, afficher Est dans le carré ET mettre en fond la couleur rouge foncé
        else if (key === 'KeyE') {
            square.textContent = 'Est';
            square.style.backgroundColor = '#8B0000';
        }
        // Si la touche appuyée est S, afficher Sud dans le carré ET mettre en fond la couleur jaune
        else if (key === 'KeyS') {
            square.textContent = 'Sud';
            square.style.backgroundColor = 'yellow';
        }
        // Si la touche appuyée est O, afficher Ouest dans le carré ET mettre en fond la couleur bleu foncé
        else if (key === 'KeyO') {
            square.textContent = 'Ouest';
            square.style.backgroundColor = '#00008B';
        }
        // Si la touche appuyée n'est aucune des 4 précédentes, afficher Inconnu dans le carré ET mettre en fond la couleur par défaut
        else {
            square.textContent = 'Est';
            square.style.backgroundColor = '#8B0000';
        }
    });
    
});

