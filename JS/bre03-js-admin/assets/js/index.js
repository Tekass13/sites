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
            let title = event.target;
           let dataNav = title.getAttribute("data-nav");
           let ul = document.querySelector("ul[data-nav='" + dataNav + "']");

            ul.classList.toggle("close");
        });
    }

    let menuBtn = document.getElementById("side-menu-btn");

    menuBtn.addEventListener("click", function(){
       let header = document.querySelector("header > section");
       header.classList.toggle("open");

        let aside = document.querySelector("main > aside");
        aside.classList.toggle("open");

        let mainSections = document.querySelectorAll("main > section");

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
    let tbody = document.querySelector("table tbody");

    if(tbody)
    {
        for(user of users)
        {
            let tr = document.createElement("tr");

            // créer les td (id, nom, age, statut, actions)
            let td = document.createElement("td");
            let id = document.createTextNode(user.id);
            td.appendChild(id);
            tr.appendChild(td);

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
            del.classList.add("del-btn");
            let delIcon = document.createElement("span");
            delIcon.classList.add("bi-trash3");
            del.appendChild(delIcon);
            tdActions.appendChild(del);

            tr.appendChild(tdActions);

            tbody.appendChild(tr);
        }
    }
}

function deleteUser() {
    let buttons = document.querySelectorAll('.del-btn')
    buttons.forEach(element => {
        element.addEventListener('click', (e) => {
            let userId = element.getAttribute('data-user');
            users.forEach(element => {
                if (userId === 'id' && userId == element) {
                    // A finir
                }
            });
        });
    });
}

window.addEventListener("DOMContentLoaded", function(){
    menu();
    usersList();
    deleteUser();

});