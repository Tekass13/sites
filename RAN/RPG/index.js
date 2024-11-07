let pv_joueur = 1; // initialisation des pv du joueur à 1
let pa_joueur = 1; // initialisation des pa du joueur à 1

let pv_ennemi = 1; // initialisation des pv de l'ennemi à 1
let pa_ennemi = 1; // initialisation des pv de l'ennemi à 1

pv_ennemi = Math.ceil(Math.random() * 100); // Affectation des pv ennemi + 1 pour eviter le 0
pa_ennemi = Math.ceil(Math.random() * 3); // Affectation des pa ennemi + 1 pour eviter le 0

let pvj = prompt(" Saisir le nombre de point de vie "); // Affichage prompt pv
while (pvj > 100 || pvj <= 0) {
    alert("Veuillez saisir un nombre entre 1 et 100!");
    pvj = prompt(" Saisir le nombre de point de vie "); // Affichage prompt pv
}
pv_joueur = pvj; // Affectation des pv joueur

let paj = prompt(" Saisir le nombre de point d'attaque "); // Affichage prompt pa
while (paj > 3 || paj <= 0) {
    alert("Veuillez saisir un nombre entre 1 et 100!");
    paj = prompt(" Saisir le nombre de point de vie "); // Affichage prompt pv
}
pa_joueur = paj; // Affectation des pv joueur

while (pv_joueur > 0 && pv_ennemi > 0) {

    pv_ennemi -= pa_joueur; // Decrementation pv ennemi
    document.write("pv_ennemi " + pv_ennemi + "<br>");
    pv_joueur -= pa_ennemi; // Decrementation pv joueur
    document.write("pv_joueur " + pv_joueur + "<br>");

    if (pv_joueur <= 0) {
        pv_joueur = 0; // Evite les valeurs negatives
        document.write("pv_joueur " + pv_joueur + "<br>");
        document.write("L'ennemi gagne!");
    }
    else if (pv_ennemi <= 0) {
        pv_ennemi = 0; // Evite les valeurs negatives
        document.write("pv_ennemi " + pv_ennemi + "<br>");
        document.write("Le joueur gagne!");
    }
}
