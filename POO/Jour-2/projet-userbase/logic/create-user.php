<?php

require_once "../managers/UserManager.class.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $role = $_POST['role'];

    $user = new User($username, $email, $password, $role);
    $userManager = new UserManager($db, []);
    $userManager->saveUser($user);
    header("Location: ../index.php");
    exit();
}
