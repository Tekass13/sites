let tambourStart = false;

function tournerTambour(tours) {
    tambourStart = true;
}

function stopperTambour() {
    tambourStart = false;
}

function tambour(tours) {
    for (let i = 0; i < tours; i++) {
        tournerTambour();
    }
    stopperTambour();
}

let vanneRemplissage = false;

function ouvrirVanneEau() {
    vanneRemplissage = true;
}

function fermerVanneEau() {
    vanneRemplissage = false;
}

let vanneTemperature = false;

function ouvrirVanneTemperature() {
    vanneTemperature = true;
}

function fermerVanneTemperature() {
    vanneTemperature = false;
}

let niveau = 0;
let degree = 0;

function remplissage() {
    ouvrirVanneEau();
    while (niveau < 100) {
        niveau += 1;
    }
    fermerVanneEau();
    ouvrirVanneTemperature();
    while (degree < 40) {
        degree += 1;
    }
    fermerVanneTemperature();
}

let vanneVidange = false;

function ouvrirVanneVidange() {
    vanneVidange = true;
}

function fermerVanneVidange() {
    vanneVidange = false;
}

function vidange() {
    ouvrirVanneVidange();
    while (niveau > 0) {
        niveau -= 1;
    }
    fermerVanneVidange();
}

let time = prompt("Entrez la durée de votre essorage");

function essorage() {
    vidange();
    for (let i = 0; i < time; i++) {
        tambour(1);
    }
}

let mettreAdoucissant = false;

function adoucissant() {
    remplissage();

    mettreAdoucissant = true;
    tambour(10);

    vidange();
}

function rincage(tours) {
    remplissage();

    tambour(10);

    vidange();
}

let mettreLessive = false;

function lavage() {
    remplissage();

    mettreLessive = true;
    tambour(20);

    vidange();
}

function cycle() {
    lavage();
    rincage(4);
    adoucissant();
    rincage(2);
    essorage();
}
