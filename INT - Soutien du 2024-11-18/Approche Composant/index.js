// Cours : Approche composants

function Header(imageLogoSrc, titreSite) {
    const headerDOM = document.createElement('header');
    headerDOM.innerHTML = `
      <img src="${imageLogoSrc}" class="logo" />
      <h1>${titreSite}</h1>
    `;
    headerDOM.addEventListener('click', function () {
        console.log('coucou');
    });
    
    return headerDOM;
}

document.addEventListener('DOMContentLoaded', function () {
    const headerDOM = Header('toto.jpg', 'Holà qué tal ?');
    document.body.appendChild(headerDOM);
});
