<?php 
    $connectedUser = false;
?>

<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title>Exercice 2</title>
    </head>
    <body>
        <header>
            <nav>
                <?php if(!$connectedUser) { ?>
                <a href="#"><?= "Connexion" ?></a>
                <?php } else { ?>
                <a href="#"><?= "Déconnexion" ?></a>
                <?php } ?>
            </nav>
        </header>
    </body>
</html>
