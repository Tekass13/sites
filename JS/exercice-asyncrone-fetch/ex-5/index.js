let url = "https://maridoucet.sites.3wa.io/user-api/users";


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("url =", data);
        getUser(data);
    })
    .catch(err => console.error(err));


const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
function getUser(data) {
    for (let key in data) {
        const element = data[key];
        for (let i = 0; i < element.length; i++) {
            const rows = document.createElement('tr');
            tbody.appendChild(rows);

            const id = document.createElement('td');
            id.innerHTML = `${element[i].id}`;
            tbody.appendChild(id);

            const name = document.createElement('td');
            name.innerHTML = `${element[i].username}`;
            tbody.appendChild(name);

            const firstName = document.createElement('td');
            firstName.innerHTML = `${element[i].firstName}`;
            tbody.appendChild(firstName);

            const lastName = document.createElement('td');
            lastName.innerHTML = `${element[i].lastName}`;
            tbody.appendChild(lastName);

            const email = document.createElement('td');
            email.innerHTML = `${element[i].email}`;
            tbody.appendChild(email);
        }
    }
}
