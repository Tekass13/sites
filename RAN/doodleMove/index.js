// Faire en sorte que l'élément ayant la classe .js-diddle suive la souris
// lorsque celle-ci bouge
document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('mousemove', function(event) {
        console.log(event);
        let x = event.clientX;
        let y = event.clientY;
        
        let diddleDOM = document.querySelector('.js-diddle');
        diddleDOM.style.left = x + 'px';
        diddleDOM.style.top = y + 'px';
    });
});
