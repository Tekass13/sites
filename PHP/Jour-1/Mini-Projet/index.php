<?php

$students = [
    [
        "firstName" => "Hannah",
        "lastName" => "Fields",
        "grades" => [12, 11, 15]
    ],
    [
        "firstName" => "Richard",
        "lastName" => "Stein",
        "grades" => [18, 12, 13]
    ],
    [
        "firstName" => "Mark",
        "lastName" => "Hartoff",
        "grades" => [9, 11, 10]
    ],
    [
        "firstName" => "Charlie",
        "lastName" => "Nestle",
        "grades" => [9, 8, 5]
    ],
    [
        "firstName" => "Suzy",
        "lastName" => "Brent",
        "grades" => [18, 15, 16]
    ],
    [
        "firstName" => "C'est EZ",
        "lastName" => "Le PHP 🙃!",
        "grades" => [20, 20, 20]
    ]
];

function computeAverage(array $grades): float {
    return array_sum($grades) / count($grades);
}

?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Bulletin de notes</title>
</head>
<body>
    <h1>Bulletin de notes</h1>
    <h2>Liste des étudiants</h2>
    <ul id="students">
        <?php foreach ($students as $student): ?>
            <?php $average = computeAverage($student['grades']); ?>
            <li>
                <article>
                    <header>
                        <h1><?= $student['firstName'] . ' ' . $student['lastName'] ?></h1>
                    </header>
                    <section>
                        <h2>Notes :</h2>
                        <ul>
                            <?php foreach ($student['grades'] as $grade): ?>
                                <li><?= $grade . "/" . "20" ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </section>
                    <footer>
                        <h3 class="<?= $average < 10 ? 'red' : ($average <= 13 ? 'orange' : 'green') ?>">
                            <?= number_format($average, 2) ?>
                        </h3>
                    </footer>
                </article>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
