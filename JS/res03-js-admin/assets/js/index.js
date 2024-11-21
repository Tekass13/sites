let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        name: "Marsh Obrien"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        name: "Rios Gibson"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        name: "Morgan Buchanan"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        name: "Franklin Dyer"
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        name: "Keller Pitts"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        name: "Davenport Maddox"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        name: "Judith Graves"
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        name: "Hoffman Hess"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        name: "Sheena Goff"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        name: "Rose Lawrence"
    }
];

function menu()
{
    let h2s = document.querySelectorAll("main > aside h2");

    for(h2 of h2s)
    {
        h2.addEventListener("click", function(event){
           // get the appropriate ul
            let title = event.target;
           let dataNav = title.getAttribute("data-nav");
           let ul = document.querySelector("ul[data-nav='" + dataNav + "']");

           // toggle open / close on the ul

            ul.classList.toggle("close");
        });
    }

    let menuBtn = document.getElementById("side-menu-btn");

    menuBtn.addEventListener("click", function(){
       // toggle the class on the header
       let header = document.querySelector("body > header > section");
       header.classList.toggle("open");

       // toggle the class on the aside
        let aside = document.querySelector("body > main > aside");
        aside.classList.toggle("open");

        let mainSections = document.querySelectorAll("body > main > section");

        for(main of mainSections)
        {
            if(aside.classList.contains("open"))
            {
                main.style.gridColumn = "";
            }
            else
            {
                main.style.gridColumn = "1 / 3";
            }
        }
    });
}

function usersList()
{
    let tbody = document.querySelector("body > main > section table tbody");

    if(tbody)
    {
        for(user of users)
        {
            // créer le tr
            let tr = document.createElement("tr");

            // créer les td (id, nom, age, statut, actions)
            let tdId = document.createElement("td");
            let id = document.createTextNode(user.id);
            tdId.appendChild(id);
            tr.appendChild(tdId);

            let tdName = document.createElement("td");
            let name = document.createTextNode(user.name);
            tdName.appendChild(name);
            tr.appendChild(tdName);

            let tdAge = document.createElement("td");
            let age = document.createTextNode(user.age);
            tdAge.appendChild(age);
            tr.appendChild(tdAge);

            let tdActive = document.createElement("td");
            let active = document.createElement("span");

            if(user.isActive === true)
            {
                active.classList.add("bi-person-fill-up");
            }
            else
            {
                active.classList.add("bi-person-fill-down");
            }

            tdActive.appendChild(active);
            tr.appendChild(tdActive);

            let tdActions = document.createElement("td");

            let see = document.createElement("a");
            let seeIcon = document.createElement("span");
            seeIcon.classList.add("bi-eye");
            see.appendChild(seeIcon);
            tdActions.appendChild(see);

            let edit = document.createElement("a");
            let editIcon = document.createElement("span");
            editIcon.classList.add("bi-pen");
            edit.appendChild(editIcon);
            tdActions.appendChild(edit);

            let del = document.createElement("button");
            del.setAttribute("data-user", user.id);
            let delIcon = document.createElement("span");
            delIcon.classList.add("bi-trash3");
            del.appendChild(delIcon);
            tdActions.appendChild(del);

            tr.appendChild(tdActions);

            // ajouter le tr au tbody
            tbody.appendChild(tr);
        }
    }
}

function toggleDeleteModal(user = null)
{
    let stage = document.getElementById("stage");
    let deleteModal = document.getElementById("delete-modal");
    let deleteModalUser = document.querySelector("#delete-modal h4");

    stage.classList.toggle("open");
    stage.classList.toggle("close");
    deleteModal.classList.toggle("open");
    deleteModal.classList.toggle("close");

    if(user !== null)
        deleteModalUser.innerHTML = user;
}

function initDeleteModal()
{
    let deleteBtns = document.querySelectorAll("body > main > section table tbody td:last-of-type button");

    for(button of deleteBtns)
    {
        button.addEventListener("click", function(event){
           let user = users[parseInt(event.target.parentNode.getAttribute("data-user"))];
           toggleDeleteModal(user.name);
        });
    }

    let modalCancel = document.getElementById("modal-cancel-btn");

    modalCancel.addEventListener("click", function(){
        toggleDeleteModal();
    })
}

window.addEventListener("DOMContentLoaded", function(){
    menu();
    usersList();
    initDeleteModal();
});