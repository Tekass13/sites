function createStar(container, size) {
    const star = document.createElement('div');
    star.className = 'shine';
    star.style.top = (Math.random() * 100) + '%';
    star.style.left = (Math.random() * 100) + '%';
    star.style.animationDelay = (Math.random() * 20) + 's';
    star.style.mozAnimationDelay = (Math.random() * 20) + 's';
    star.classList.add(size);

    container.appendChild(star);
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.js-stars-container');

    for (let i = 0; i < 500; i++) {
        let size;
        
        if (i % 2 === 0) {
            size = 'small';
            
        } else if (i % 3 === 0) {
            size = 'medium';
            
        } else {
            size = 'large';
        }
        createStar(container, size);
    }
});
