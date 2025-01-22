<?php

require_once "../managers/AuthController.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $role = "USER";

    $user = new User($username, $email, $password, $role);
    $authController = new AuthController();
    $authController->register($user);
    header("Location: ../index.php");
    exit();
}
