<?php

require_once "../managers/AuthController.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $authController = new AuthController();
    $authController->login($email, $password);
    header("Location: ../index.php");
    exit();
}
