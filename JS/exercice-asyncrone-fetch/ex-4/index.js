let url = "https://maridoucet.sites.3wa.io/user-api/user/18"

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("url =", data);
        getUser(data);
    })
    .catch(err => console.error(err));

function getUser(data) {
    const container = document.createElement('div');
    container.id = 'user-container';
    document.body.appendChild(container);
    container.innerHTML = '';

    for (let key in data) {
        const element = data[key];
        console.log(element);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-card');
        console.log(element);
        userDiv.innerHTML = `
            <h1>${element.username}</h1>
            <h2>${element.firstName} ${element.lastName}</h2>
            <h3>${element.email}</h3>
        `;

        container.appendChild(userDiv);
    }
}
