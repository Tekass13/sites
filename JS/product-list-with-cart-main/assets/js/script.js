document.addEventListener('DOMContentLoaded', () => {

    const orderData = 'data.json';

    fetch(orderData)
        .then(response => response.json())
        .then(data => createElement(data))
        .catch(error => console.error('Erreur :', error));

    function createElement(data) {
        const containerCards = document.querySelector('#container-cards');
        
        data.forEach(element => {
            const cards = document.createElement('article');
            cards.classList.add('cards');
            containerCards.appendChild(cards);

            const imageCards = document.createElement('img');
            imageCards.setAttribute('src', element.image.mobile);
            cards.appendChild(imageCards);
            
            const infosCards = document.createElement('div');
            infosCards.classList.add('infos-cards');
            cards.appendChild(infosCards);

            const categoryCards = document.createElement('p');
            categoryCards.classList.add('category-cards');
            categoryCards.innerHTML = element.category;
            infosCards.appendChild(categoryCards);

            const nameCards = document.createElement('p');
            nameCards.classList.add('name-cards');
            nameCards.innerHTML = element.name;
            infosCards.appendChild(nameCards);

            const priceCards = document.createElement('p');
            priceCards.classList.add('price-cards');
            priceCards.innerHTML = `$${element.price.toFixed(2)}`;
            infosCards.appendChild(priceCards);

            const buttonCards = document.createElement('a');
            buttonCards.classList.add('button-cards');
            cards.appendChild(buttonCards);
            
            let quantity = 0;

            const decrementSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            decrementSvg.setAttribute('width', '10');
            decrementSvg.setAttribute('height', '2');
            decrementSvg.setAttribute('viewBox', '0 0 10 2');
            const pathDecrement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathDecrement.setAttribute('fill', '#fff');
            pathDecrement.setAttribute('d', 'M0 .375h10v1.25H0V.375Z');
            decrementSvg.appendChild(pathDecrement);
            decrementSvg.classList.add('decrease-btn');

            const incrementSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            incrementSvg.setAttribute('width', '10');
            incrementSvg.setAttribute('height', '10');
            incrementSvg.setAttribute('viewBox', '0 0 10 10');
            const pathIncrement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathIncrement.setAttribute('fill', '#fff');
            pathIncrement.setAttribute('d', 'M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z');
            incrementSvg.appendChild(pathIncrement);
            incrementSvg.classList.add('increase-btn');

            const quantityDisplay = document.createElement('span');
            quantityDisplay.classList.add('quantity-display');

            buttonCards.appendChild(decrementSvg);
            buttonCards.appendChild(quantityDisplay);
            buttonCards.appendChild(incrementSvg);
            
            const addToCartText = document.createElement('span');
            addToCartText.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg> Add to Cart';
            buttonCards.appendChild(addToCartText);

            cards.appendChild(buttonCards);

            buttonCards.addEventListener('click', () => {

                buttonCards.style.backgroundColor = 'var(--red)';
                buttonCards.style.color = 'var(--rose50)';
                
                quantityDisplay.innerText = quantity;
                addToCartText.style.display = 'none';
            });

            decrementSvg.addEventListener('click', (e) => {
                e.stopPropagation();
                if (quantity > 0) {
                    quantity -= 1;
                    quantityDisplay.innerText = quantity;
                }
            });

            incrementSvg.addEventListener('click', (e) => {
                e.stopPropagation();
                quantity += 1;
                quantityDisplay.innerText = quantity;
            });
        });
    }
});
