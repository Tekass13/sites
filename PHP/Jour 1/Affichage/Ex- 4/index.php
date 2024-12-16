<?php 
    $users = [
        [
            "firstName" => "Bugs",
            "lastName" => "Bunny",
            "age" => 29
        ],
        [
            "firstName" => "Roger",
            "lastName" => "Rabbit",
            "age" => 17
        ]
    ];
?>

<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title>Exercice 4</title>
    </head>
    <body>
        <h1>
            Liste des utilisateurs
        </h1>
        <ul>
            <?php foreach($users as $user) { ?>
                <?php foreach($user as $value) { ?>
                    <li><?= $value ?></li>
                <?php } ?>
                <?php  if ($value >= 18) { ?>
                        <li><?= "Majeur" ?></li>
                    <?php } else { ?>
                        <li><?= "Mineur" ?></li>
                    <?php } ?>
            <?php } ?>
        </ul>
    </body>
</html>
