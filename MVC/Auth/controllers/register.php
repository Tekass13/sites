<?php

require_once "../controllers/AuthController.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $role = "USER";

    $query = $db->prepare('INSERT INTO users (username, email, password, role, created_at) VALUES (:username, :email, :password, :role, NOW())');
    $parameters = [
        ':username' => $user->getUserName(),
        ':email' => $user->getEmail(),
        ':password' => $user->getPassword(),
        ':role' => $user->getRole(),
    ];
    $query->execute($parameters);
    $lastInsertId = $db->lastInsertId();
    $user->setId($lastInsertId);

    $user = new User($username, $email, $password, $role);
    $authController = new AuthController();
    $authController->register($user);
    
    header("Location: ../index.php");
    exit();
}
