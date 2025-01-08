<?php
require('connexion.php');

if (isset($_GET['id'])) {
    $query = $db->prepare('SELECT * FROM users JOIN address ON user.address = address.id WHERE users.id = :id');
    $parameters = [
        'id' => $_GET['id']
    ];
    $query->execute($parameters);

    $user = $query->fetch(PDO::FETCH_ASSOC);
    var_dump($user);
}
