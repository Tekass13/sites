<?php

require "connexion.php";
require "User.php";

$superman = [
    "first_name" => "Clark",
    "last_name" => "Kent",
    "email" => "clark.kent@test.fr"
];

// Creation d'une nouvel instance depuis un tableau
// $addSuperman = new User($superman["first_name"], $superman["last_name"], $superman["email"]);
// echo "{$addSuperman->getFirstName()} {$addSuperman->getLastName()} {$addSuperman->getEmail()} <br><br>";

// Creation d'une nouvel instance pour l'id 1
$query = $db->prepare('SELECT * FROM users WHERE id = 1');
$query->execute();
$user = $query->fetch(PDO::FETCH_ASSOC);
$addUser = new User($user["first_name"], $user["last_name"], $user["email"]);

// Creation d'une nouvel instance pour chaque utilisateur de la bdd
$query = $db->prepare('SELECT * FROM users');
$query->execute();
$users = $query->fetchAll(PDO::FETCH_ASSOC);
foreach ($users as $user) {
    $addUsers = new User($user["first_name"], $user["last_name"], $user["email"]);
    echo "{$addUsers->getFirstName()} {$addUsers->getLastName()} {$addUsers->getEmail()} <br>";
}

// Ajout d'une instance dans la bdd
// $addClarkKent = new User("Clark", "Kent", "clark.kent@test.fr");
// $query = $db->prepare('INSERT INTO users (first_name, last_name, email) VALUES (:first_name, :last_name, :email)');
// $parameters = [
//     'first_name' => $addClarkKent->getFirstName(),
//     'last_name' => $addClarkKent->getLastName(),
//     'email' => $addClarkKent->getEmail(),
// ];
// $query->execute($parameters);

// Mise à jour des instance depuis la bdd
$query = $db->prepare('SELECT * FROM users');
$query->execute();
$users = $query->fetchAll(PDO::FETCH_ASSOC);
$lastInsertId = $db->lastInsertId();
foreach ($users as $key) {
    foreach ($key as $value) {
        $addUsers = new User($key["first_name"], $key["last_name"], $key["email"]);
        $addUsers->setId($lastInsertId);
    }
    echo "User = {$addUsers->getId()} {$addUsers->getFirstName()} {$addUsers->getLastName()} {$addUsers->getEmail()} <br>";
}
