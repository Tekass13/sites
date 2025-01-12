<?php
session_start();

require '../connexion.php';

if (isset($_POST['email'], $_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = $db->prepare("SELECT * FROM users WHERE email = ?");
    $query->execute([$email]);

    $user = $query->fetch(PDO::FETCH_ASSOC);

    if ($user === false) {
        echo '<h1>Email incorrect</h1>';
    } else {
        if (!password_verify($password, $user['password'])) {
            echo '<h1 style="color:red">Mot de passe incorrect</h1>';
        } else {
            $_SESSION['user'] = [
                'first_name' => $user['first_name'],
                'last_name'  => $user['last_name']
            ];
            header('Location: ../home.phtml');
            exit();
        }
    }
}
