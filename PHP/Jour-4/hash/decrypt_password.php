<?php
if (isset($_POST['password'], $_POST['hashed_password'])) {
    $password = $_POST['password'];
    $hashedPassword = $_POST['hashed_password'];
    $isPasswordCorrect = password_verify($password, $hash);


    if ($isPasswordCorrect) {
        echo "<h1>Mot de passe correct</h1>";
    } else {
        echo "<h1>Mot de passe erroné</h1>";
    }
} else {
    echo "<h1>Erreur : Tous les champs sont obligatoires</h1>";
}
