document.addEventListener('DOMContentLoaded', () => {
    const containerCards = document.querySelector('#container-cards');
    const containerQuotes = document.querySelector('#container-quotes');
    const containerFavorites = document.querySelector('#container-favorites');
    const buttonQuotes = document.querySelector('#button-quotes');

    let url = "https://dummyjson.com/quotes?limit=12";
    let randomUrl = "https://dummyjson.com/quotes/random/10";

    const favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

    // Récupèration les éléments de l'API séléctionné
    function fetchQuotes(url, container, isRandom = false) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayQuotes(isRandom ? data : data.quotes, container);
            })
            .catch(err => console.error("Erreur :", err));
    }

    // Affichage des éléments de l'API
    function displayQuotes(quotes, container) {
        container.innerHTML = '';
        quotes.forEach(quote => {
            const blockquote = document.createElement('blockquote');
            blockquote.classList.add('quote-card');
            container.appendChild(blockquote);

            const p = document.createElement('p');
            p.innerHTML = quote.quote;
            blockquote.appendChild(p);

            const footerCard = document.createElement('div');
            footerCard.classList.add('footer-card');
            blockquote.appendChild(footerCard);

            const cite = document.createElement('cite');
            cite.innerHTML = quote.author;
            footerCard.appendChild(cite);

            const link = document.createElement('a');
            link.setAttribute('href', '#');
            footerCard.appendChild(link);

            const icon = document.createElement('i');
            icon.classList.add('bi', favoriteQuotes.includes(quote.id) ? 'bi-heart-fill' : 'bi-heart');
            link.appendChild(icon);

            link.addEventListener('click', (e) => {
                e.preventDefault();
                toggleFavorite(quote.id, icon);
            });
        });
    }

    // Affiche la liste des favoris
    function loadFavoriteQuotes() {
        const storedQuotes = [];
    
        favoriteQuotes.forEach(id => {
            fetch(`https://dummyjson.com/quotes/${id}`)
                .then(response => response.json())
                .then(quote => {
                    storedQuotes.push(quote);
                    if (storedQuotes.length === favoriteQuotes.length) {
                        console.log(favoriteQuotes);
                        displayQuotes(storedQuotes, containerFavorites);
                    }
                })
                .catch(err => console.error(`Erreur lors du chargement de la citation ID ${id}:`, err));
        });
    }
    loadFavoriteQuotes();

    // Dynamise le comportement de l'icone favoris
    function toggleFavorite(quoteId, icon) {
        const index = favoriteQuotes.indexOf(quoteId);
        if (index === -1) {
            favoriteQuotes.push(quoteId);
            icon.classList.add('bi-heart-fill');
            icon.classList.remove('bi-heart');
        } else {
            favoriteQuotes.splice(index, 1);
            icon.classList.add('bi-heart');
            icon.classList.remove('bi-heart-fill');
        }
        localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
    }

    // Appel de la fonction de récupération des éléments pour l'id "container-card"
    fetchQuotes(url, containerCards);

    // Appel de la fonction de récupération des éléments pour l'id "container-quotes"
    buttonQuotes.addEventListener('click', () => {
        fetchQuotes(randomUrl, containerQuotes, true);
    });

});
