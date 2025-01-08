<?php
require('connexion.php');

if (isset($_GET['id'])) {
    // je mets un placeholder dans la requête avec :
    $query = $db->prepare('SELECT * FROM users WHERE id = :id');

    // je prépare ma requête avec les paramètres
    $parameters = [
        'id' => $_GET['id']
    ];

    // PDO va cleaner les paramètres puis exécuter la requête
    $query->execute($parameters);

    $user = $query->fetch(PDO::FETCH_ASSOC);
    var_dump($user);
}
