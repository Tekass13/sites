// Tableau utilisateurs
let users = [
    {
        firstName: "Marc",
        lastName: "Beaufort",
        email: "marc.beaufort@test.fr",
        active: true
    },
    {
        firstName: "Lucie",
        lastName: "Carmin",
        email: "lucie.carmin@test.fr",
        active: true
    },
    {
        firstName: "Armand",
        lastName: "Perrot",
        email: "armand.perrot@test.fr",
        active: false
    },
    {
        firstName: "Sarah",
        lastName: "Calmels",
        email: "sarah.calmels@test.fr",
        active: true
    },
];

// Creation et mise à jour du tableau en HTML
function usersList(user = null) {
    let tbody = document.querySelector("table tbody");

    if (user) {
        let tr = document.createElement("tr");

        let tdFirstName = document.createElement("td");
        tdFirstName.textContent = user.firstName;
        tr.appendChild(tdFirstName);

        let tdLastName = document.createElement("td");
        tdLastName.textContent = user.lastName;
        tr.appendChild(tdLastName);

        let tdEmail = document.createElement("td");
        tdEmail.textContent = user.email;
        tr.appendChild(tdEmail);

        let tdActive = document.createElement("td");
        tdActive.textContent = user.active ? "Actif" : "Inactif";
        tr.appendChild(tdActive);

        let tdActions = document.createElement("td");

        let see = document.createElement("button");
        let seeIcon = document.createElement("span");
        see.classList.add("mx-1", "btn", "btn-primary");
        seeIcon.classList.add("bi", "bi-eye-fill");
        see.appendChild(seeIcon);
        tdActions.appendChild(see);

        let edit = document.createElement("button");
        let editIcon = document.createElement("span");
        edit.classList.add("btn", "btn-success");
        editIcon.classList.add("bi", "bi-pencil-fill");
        edit.appendChild(editIcon);
        tdActions.appendChild(edit);

        let del = document.createElement("button");
        del.setAttribute("data-user", user.id);
        del.classList.add("mx-1", "btn", "btn-danger");
        del.setAttribute("data-bs-toggle", "modal");
        del.setAttribute("data-bs-target", "#deleteUserModal");
        del.setAttribute("data-bs-user", user.email);
        let delIcon = document.createElement("span");
        delIcon.classList.add("bi", "bi-trash-fill");
        del.appendChild(delIcon);
        tdActions.appendChild(del);

        tr.appendChild(tdActions);

        tbody.appendChild(tr);

    } else {
                for (i = 0; i < users.length; i++) {
            let tr = document.createElement("tr");

            let tdFirstName = document.createElement("td");
            let firstName = document.createTextNode(users[i].firstName);
            tdFirstName.appendChild(firstName);
            tr.appendChild(tdFirstName);

            let tdLastName = document.createElement("td");
            let lastName = document.createTextNode(users[i].lastName);
            tdLastName.appendChild(lastName);
            tr.appendChild(tdLastName);

            let tdEmail = document.createElement("td");
            let Email = document.createTextNode(users[i].email);
            tdEmail.appendChild(Email);
            tr.appendChild(tdEmail);

            let tdActive = document.createElement("td");
            let active = document.createTextNode(users[i].active);
            tdActive.appendChild(active);
            tr.appendChild(tdActive);

            let tdActions = document.createElement("td");

            let see = document.createElement("button");
            let seeIcon = document.createElement("span");
            see.classList.add("mx-1", "btn", "btn-primary");
            seeIcon.classList.add("bi", "bi-eye-fill");
            see.appendChild(seeIcon);
            tdActions.appendChild(see);

            let edit = document.createElement("button");
            let editIcon = document.createElement("span");
            edit.classList.add("btn", "btn-success");
            editIcon.classList.add("bi", "bi-pencil-fill");
            edit.appendChild(editIcon);
            tdActions.appendChild(edit);

            let del = document.createElement("button");
            del.setAttribute("data-user", users[i].id);
            del.classList.add("mx-1", "btn", "btn-danger");
            del.setAttribute("data-bs-toggle", "modal");
            del.setAttribute("data-bs-target", "#deleteUserModal");
            del.setAttribute("data-bs-user", users[i].email);
            let delIcon = document.createElement("span");
            delIcon.classList.add("bi", "bi-trash-fill");
            del.appendChild(delIcon);
            tdActions.appendChild(del);

            tr.appendChild(tdActions);

            tbody.appendChild(tr);
        }
    }
}

// // Ajout d'un attribut contenant l'e-mail de l'utilisateur
// function addAttribute(e, btn, modal) {

//     let button = e.relatedTarget;
//     let userEmail = button.getAttribute('data-bs-user');

//     let modalBody = modal.querySelector('.modal-body');
//     modalBody.textContent = `Êtes-vous sûr de vouloir supprimer l'utilisateur avec l'email ${userEmail} ?`;

//     let btn = modal.querySelector('.btn-danger');
//     btn.setAttribute('data-user-email', userEmail);
// }

// // Suppression de l'utilisateur
// function deleteUser(btn, modal) {

//     let userEmail = btn.getAttribute('data-user-email');

//     let userIndex = users.findIndex(user => user.email === userEmail);
//     if (userIndex !== -1) {
//         users.splice(userIndex, 1);
//     }

//     clearTable();
//     usersList();

//     let modalInstance = bootstrap.Modal.getInstance(modal);
//     modalInstance.hide();
// }

let deleteModal = document.querySelector('#deleteUserModal');
let confirmButton = deleteModal.querySelector('#DeleteUserFormButton');
// Ajout d'un attribut contenant l'e-mail de l'utilisateur
function addAttribute(e) {

    let button = e.relatedTarget;
    let userEmail = button.getAttribute('data-bs-user');

    let modalBody = deleteModal.querySelector('.modal-body');
    modalBody.textContent = `Êtes-vous sûr de vouloir supprimer l'utilisateur avec l'email ${userEmail} ?`;

    let confirmButton = deleteModal.querySelector('.btn-danger');
    confirmButton.setAttribute('data-user-email', userEmail);
}

// Suppression de l'utilisateur
function deleteUser() {

    let userEmail = confirmButton.getAttribute('data-user-email');

    let userIndex = users.findIndex(user => user.email === userEmail);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
    }

    clearTable();
    usersList();

    let modalInstance = bootstrap.Modal.getInstance(deleteModal);
    modalInstance.hide();
}

// Nettoyage du tableau
function clearTable() {
    let tbody = document.querySelector("table tbody");
    if (tbody) {
        tbody.innerHTML = "";
    }
}

// Ajout d'un utilisateur au tableau
function addUser() {
    let form = document.querySelector('#addUserForm');
    let addFirstName = document.querySelector('#addUserFirstName');
    let addLastName = document.querySelector('#addUserLastName');
    let addEmail = document.querySelector('#addUserEmail');

    let firstName = addFirstName.value.trim();
    let lastName = addLastName.value.trim();
    let email = addEmail.value.trim();

    if (firstName && lastName && email) {
        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            active: true
        };

        users.push(newUser);
        console.log(users);
        usersList();
        form.reset();
    } else {
        alert("Veuillez remplir tous les champs !");
    }
    let addModal = document.querySelector('#addUserModal');
    let modalInstance = bootstrap.Modal.getInstance(addModal);
    modalInstance.hide();
}

// Filtrage des utilisateurs: tous / actif / inactif
function filterUsers(status) {
    let filteredUsers;

    if (status === "active") {
        filteredUsers = users.filter(user => user.active === true);
    } else if (status === "inactive") {
        filteredUsers = users.filter(user => user.active === false);
    } else {
        filteredUsers = users;
    }

    clearTable();
    filteredUsers.forEach(user => {
        usersList(user);
    });
}

// Recherche un utilisateur dans le tableau
function searchUsers(char) {
    let lowerCaseQuery = char.toLowerCase();

    let filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(lowerCaseQuery) || 
        user.lastName.toLowerCase().includes(lowerCaseQuery)
    );

    clearTable();
    filteredUsers.forEach(user => {
        usersList(user);
    });
}

// Evenements
document.addEventListener('DOMContentLoaded', () => {
    let searchInput = document.querySelector('#searchInput');
    let button = document.querySelector('#addUserFormButton');
    let filterDropdown = document.querySelector('#filterStatus');

    usersList();

    searchInput.addEventListener('input', (e) => {
        searchUsers(e.target.value);
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();
        clearTable();
        addUser();
    });

    deleteModal.addEventListener('show.bs.modal', (e) => {
        addAttribute(e, confirmButton, deleteModal);
    });

    confirmButton.addEventListener('click', (e) => {
        deleteUser(confirmButton, deleteModal);
    });

    filterDropdown.addEventListener('change', (e) => {
        filterUsers(e.target.value);
    })
});
