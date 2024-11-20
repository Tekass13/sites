const valueAnnee = 0

function anneeBissextile(annee) {
    if (annee % 4 === 0 && annee % 100 !== 0 && annee % 400 === 0) {
        valueAnnee = 0;
    }
    else {
        valueAnnee = 1;
    }
    return valueAnnee;
}

const valueTrente = 0

function trenteJours(mois) {
    if (mois === 1 || mois === 3 || mois == 5 || mois === 7 || mois = 8 || mois = 10 || mois = 12) {
        valueMois = 0;
    }
    else {
        valueMois = 1;
    }
    return valueMois;
}

const valueTrenteEtUn = 0

/*function trenteEtUnJours(mois) {
    if (mois === 2 || mois === 4 || mois == 6 || mois === 9 || mois = 11) {
        valueMois = 0;
    }
    else {
        valueMois = 1;
    }
    return valueMois;
}*/

function nombreJours(mois, annee) {
    let estTrente = trenteJours(mois);
    let estTrenteEtUn = trenteEtUnJours(mois);

    if (estTrente === 1) {
        return 30;
    }
    else {
        return 31;
    }
    let bissextile = anneeBissextile(annee);
    if (bissextile === 1) {
        return 29;
    }
    else {
        return 28;
    }
}

function programme() {
    let mois;
    mois = prompt("Saisir un numéro de mois");
    while (mois < 1 || mois > 12) {
        mois = prompt("Saisir un numéro de mois");
    } 
}
