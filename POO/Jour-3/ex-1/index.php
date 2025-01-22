<?php

require_once "logic/Reader.class.php";

$reader = new Reader("example@example.com", "securePassword123");

$reader->addBookToFavorites("The Great Gatsby");
$reader->addBookToFavorites("1984");

echo "Liste des livres favoris après ajout :<br>";
print_r($reader->addBookToFavorites(""));

$reader->removeBookFromFavorites("1984");

echo "<br> Liste des livres favoris après suppression :<br>";
print_r($reader->removeBookFromFavorites(""), "<br>");

$loginInfo = $reader->login();
echo "Email : " . $loginInfo['login'] . "<br>";
echo "Mot de passe : " . $loginInfo['password'] . "<br>";