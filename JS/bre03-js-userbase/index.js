let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

// Étape 1 : Compter les utilisateurs et utilisatrices actif-ve-s
function countActiveUsers(users) {
    let actif = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive === true) {
            actif++;
        }
    }
    return actif;
}
console.log(`We currently have ${ countActiveUsers(users) } active users.`);

let activeUsers = [];
function getActiveUsers(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive === true) {
            activeUsers.push(users[i]);
        }
    }
    return activeUsers;
}

// Étape 2 : Parmi les utilisateurs et utilisatrices acti-f-ves combien ont les yeux bleus ?
function hasBlueEyes(activeUsers) {
    let blueEyes = 0;

    for (let i = 0; i < activeUsers.length; i++) {
        if (activeUsers[i].eyeColor === 'blue') {
            blueEyes++;
        }
    }
    return blueEyes;
}
console.log(`Out of our currently ${ countActiveUsers(users) } active users, ${ getActiveUsers(users).length } have blue eyes.`);

// Étape 3 : Parmi les utilisateurs et utilisatrices actif-ve-s quel est l’âge moyen ?
function computeActiveUsersAverageAge(activeUsers) {
    let totalAge = 0; 
    let count = 0;
    let average = 0;

    for (let i = 0; i < activeUsers.length; i++) {
        totalAge += activeUsers[i].age;
        count++;
    }
    average = totalAge / count;
    return average
}
console.log(`Out of our currently ${ countActiveUsers(users) } active users, the average age is ${ computeActiveUsersAverageAge(getActiveUsers(users)) }.`);

// Étape 4 : Rachat de MULTRON par CENTURIA
function getMultronUsers(users) {
    let multronUser = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].company === "MULTRON") {
            multronUser++;
        }
    }
    return multronUser;
}
console.log(`We currently have ${ countActiveUsers(users) } active users.`);

// Étape 5 : qui a les yeux marron et ne travaille pas chez CENTURIA ?
function setMultronToCenturia(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].company === "MULTRON") {
            users[i].company = "CENTURIA";
        }
    }
}
console.log(`${ getMultronUsers(users) } user companies have been changed from MULTRON to CENTURIA.`);

function countBrownEyedUsersNotCenturia(users) {
    let brownNotCenturiaUsers = 0;
    for (let i = 0; i < users.length; i++) {
        if ((users[i].eyeColor === "brown") && (users[i].company !== "CENTURIA")) {
            brownNotCenturiaUsers ++ ;
        }
    }
    return brownNotCenturiaUsers
}
console.log(`${ countBrownEyedUsersNotCenturia(users) } users with brown eyes do not work at CENTURIA`);

// Étape 6 : pour chacune des couleurs d’yeux, compter le nombre de users actif-ve-s et inactif-ve-s
function countColorEyedUsersActif(users, color) {
    let usersFounds = 0;
    for (let i = 0; i < users.length; i++) {
        if ((users[i].eyeColor === color) && (users[i].isActive === true)) {
            usersFounds ++;
        }
    }
    return usersFounds
}

function countColorEyedUsersInactif(users, color) {
    let usersFounds = 0;
    for (let i = 0; i < users.length; i++) {
        if ((users[i].eyeColor === color) && (users[i].isActive === false)) {
            usersFounds ++;
        }
    }
    return usersFounds
}

console.log(`Out of our brown eyed users ${ countColorEyedUsersActif(users, "brown") } are active and ${ countColorEyedUsersInactif(users, "brown") } are inactive`);

console.log(`Out of our green eyed users ${ countColorEyedUsersActif(users, "green") } are active and ${ countColorEyedUsersInactif(users, "green") } are inactive`);

console.log(`Out of our blue eyed users ${ countColorEyedUsersActif(users, "blue") } are active and ${ countColorEyedUsersInactif(users, "blue") } are inactive`);