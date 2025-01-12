<?php

if (isset($_GET["heroName"])) {
    $heroName = $_GET["heroName"];
}

if (
    isset($_GET["heroName"]) && !isset($_GET["choice"]) && !isset($_GET["eventNumber"])
) {
    $choiceShortSentence = "Comment allez-vous procéder ?";
    $eventDescription = "Vous vous trouvez devant la porte d'un donjon dont vous ne parvenez pas à voir le sommet, enfoui dans les nuages.";
    $eventImage = "assets/img/cross-swords.png";
    $choices = [
        "Vous poussez la lourde porte en bois.",
        "Vous faites le tour du donjon pour voir s'il n'existe pas une entrée plus discrète."
    ];

    $eventNumber = 1;
    $color = "red";
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 1 && isset($_GET["choice"]) && $_GET["choice"] == 0) {
    $choiceShortSentence = "Quelle arme choisissez-vous ?";
    $eventDescription = "Vous pénétrez dans l'entrée du donjon. Face à vous se trouvent une masse, une épée et une hache.";
    $eventImage = "assets/img/axe.png";
    $choices = [
        "La hache",
        "L'épée",
        "La masse"
    ];

    $eventNumber = 2;
    $color = "grey-blue";
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 1 && isset($_GET["choice"]) && $_GET["choice"] == 1) {
    $choiceShortSentence = "Comment allez-vous procéder ?";
    $eventDescription = "Non, pas de porte dérobée. Vous vous trouvez devant la porte d'un donjon dont vous ne parvenez pas à voir le sommet, enfoui dans les nuages.";
    $eventImage = "assets/img/tower.png";
    $choices = [
        "Vous poussez la lourde porte en bois."
    ];

    $eventNumber = 1;
    $color = "dark-blue";
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 2 && isset($_GET["choice"])) {
    $choice = $_GET["choice"];

    if ($choice == 0) { // La hache
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "Avec la hache en main, vous sentez une puissance brute. Vous avancez dans un couloir sombre, et une créature surgit !";
        $eventImage = "assets/img/potion.png";
        $choices = [
            "Vous attaquez immédiatement.",
            "Vous essayez de parlementer."
        ];

        $eventNumber = 3;
        $color = "red";
    } else if ($choice == 1) { // L'épée
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "L'épée brille faiblement dans la lumière. Vous entrez dans une grande salle où une énigme est inscrite sur le mur.";
        $eventImage = "assets/img/poison.png";
        $choices = [
            "Vous essayez de résoudre l'énigme.",
            "Vous cherchez un autre passage."
        ];

        $eventNumber = 4;
        $color = "grey-blue";
    } else if ($choice == 2) { // La masse
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "Avec la masse, vous sentez un poids rassurant dans vos mains. Vous brisez une porte et découvrez un trésor caché.";
        $eventImage = "assets/img/mace.png";
        $choices = [
            "Vous ouvrez le coffre.",
            "Vous ignorez le trésor et continuez votre exploration."
        ];

        $eventNumber = 5;
        $color = "dark-blue";
    }
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 3 && isset($_GET["choice"])) {
    $choice = $_GET["choice"];

    if ($choice == 0) { // Attaque
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "Votre attaque blesse la créature, mais elle riposte violemment. Vous parvenez à la terrasser.";
        $eventImage = "assets/img/shield.png";
        $choices = [
            "Vous explorez la pièce suivante.",
            "Vous fouillez la créature."
        ];

        $eventNumber = 6;
        $color = "red";
    } else if ($choice == 1) { // Parlement
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "La créature, intriguée par votre courage, accepte de ne pas vous attaquer. Elle vous révèle un passage secret.";
        $eventImage = "assets/img/orc.png";
        $choices = [
            "Vous empruntez le passage secret.",
            "Vous explorez le couloir principal."
        ];

        $eventNumber = 7;
        $color = "grey-blue";
    }
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 4 && isset($_GET["choice"])) {
    $choice = $_GET["choice"];

    if ($choice == 0) { // Résolution de l'énigme
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "L'énigme déverrouille une porte cachée qui mène à une salle mystérieuse.";
        $eventImage = "assets/img/money.png";
        $choices = [
            "Vous entrez dans la salle.",
            "Vous explorez les alentours avant d'entrer."
        ];

        $eventNumber = 8;
        $color = "dark-blue";
    } else if ($choice == 1) { // Autre passage
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "Vous découvrez un passage secondaire menant à une salle remplie de pièges.";
        $eventImage = "assets/img/portal.png";
        $choices = [
            "Vous tentez de désactiver les pièges.",
            "Vous cherchez un autre chemin."
        ];

        $eventNumber = 9;
        $color = "red";
    }
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 5 && isset($_GET["choice"])) {
    $choice = $_GET["choice"];

    if ($choice == 0) { // Ouvrir le coffre
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "Le coffre contient une clé ancienne et un parchemin. Vous décidez de poursuivre avec ces objets.";
        $eventImage = "assets/img/map.png";
        $choices = [
            "Vous lisez le parchemin.",
            "Vous utilisez la clé sur une porte verrouillée à proximité."
        ];

        $eventNumber = 10;
        $color = "grey-blue";
    } else if ($choice == 1) { // Ignorer le trésor
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "Vous continuez votre exploration et découvrez une salle étrange avec des symboles lumineux.";
        $eventImage = "assets/img/fire-spell.png";
        $choices = [
            "Vous examinez les symboles de près.",
            "Vous essayez d'interagir avec les symboles."
        ];

        $eventNumber = 10;
        $color = "dark-blue";
    }
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 8 && isset($_GET["choice"])) {
    $choice = $_GET["choice"];

    if ($choice == 0) { // Entrer dans la salle
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "Dans la salle, un artefact magique repose sur un piédestal, mais la salle est protégée par une barrière.";
        $eventImage = "assets/img/money.png";
        $choices = [
            "Vous tentez de désactiver la barrière.",
            "Vous analysez la salle pour trouver une solution."
        ];

        $eventNumber = 10;
        $color = "red";
    } else if ($choice == 1) { // Explorer avant d'entrer
        $choiceShortSentence = "Que faites-vous ensuite ?";
        $eventDescription = "En explorant les alentours, vous découvrez un levier caché qui semble lié à la salle.";
        $eventImage = "assets/img/werewolf.png";
        $choices = [
            "Vous actionnez le levier.",
            "Vous retournez à la salle pour vérifier ses effets."
        ];

        $eventNumber = 10;
        $color = "grey-blue";
    }
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 10 && isset($_GET["choice"])) {
    $choice = $_GET["choice"];

    if ($choice == 0) { // Fin 1
        $choiceShortSentence = "Félicitations !";
        $eventDescription = "Vous avez découvert un trésor inestimable et réussi votre quête !";
        $eventImage = "assets/img/tower.png";
        $choices = [];

        $eventNumber = 11;
        $color = "dark-blue";
    } else if ($choice == 1) { // Fin 2
        $choiceShortSentence = "Félicitations !";
        $eventDescription = "Vous avez vaincu le gardien du donjon et triomphé des épreuves !";
        $eventImage = "assets/img/map.png";
        $choices = [];

        $eventNumber = 11;
        $color = "red";
    } else if ($choice == 2) { // Fin 3
        $choiceShortSentence = "Félicitations !";
        $eventDescription = "Vous avez révélé les secrets du donjon et êtes devenu une légende !";
        $eventImage = "assets/img/staff.png";
        $choices = [];

        $eventNumber = 11;
        $color = "grey-blue";
    }
}

require "templates/choice.phtml";
