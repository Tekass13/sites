<?php 
    $grades = [
        "french" => [12, 9, 13],
        "english" => [18, 12, 11],
        "maths" => [15, 11, 13]
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
            Liste des notes
        </h1>
        <ul>
            <?php foreach ($grades as $key => $grade) { ?>
                    <h2><?= $key ?></h2> 
                <?php  foreach ($grade as $value) { ?>
                         <li><?= $value ?></li> 
                <?php } ?>
             <?php } ?>
        </ul>
    </body>
</html>
