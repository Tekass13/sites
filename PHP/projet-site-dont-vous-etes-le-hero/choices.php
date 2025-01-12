<?php

if (isset($_GET["heroName"])) {
    $heroName = $_GET["heroName"];
    echo $heroName;
}

if (isset($_GET["heroName"]) && !isset($_GET["choice"]) && !isset($_GET["eventNumber"])
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
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 1 && isset($_GET["choice"]) && $_GET["choice"] == 0) { // si c'est le choix 0 de l'étape 1
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
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 1 && isset($_GET["choice"]) && $_GET["choice"] == 1) { // si c'est le choix 1 de l'étape 1
    $choiceShortSentence = "Comment allez-vous procéder ?";
    $eventDescription = "Non, pas de porte dérobée. Vous vous trouvez devant la porte d'un donjon dont vous ne parvenez pas à voir le sommet, enfoui dans les nuages.";
    $eventImage = "assets/img/tower.png";
    $choices = [
        "Vous poussez la lourde porte en bois."
    ];

    $eventNumber = 1;
    $color = "red";
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 2 && $_GET["choice"] == 0) {
    header('Location: index.html');
}

require "templates/choice.phtml";
?>