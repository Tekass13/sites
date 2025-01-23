<?php

require_once "../controllers/AuthController.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $query = $db->prepare("SELECT * FROM users WHERE email = ?");
    $query->execute([$email]);
    $userData = $query->fetch(PDO::FETCH_ASSOC);
    
    if ($userData && $email === $userData["email"] && $password === $userData["password"]) {
        var_dump($userData);
        $user = new User(
            $userData["username"],
            $userData["email"],
            $userData["password"],
            $userData["role"],
            $userData["created_at"]
        );

        $_SESSION['user'] = ['username' => $userData['username']];

        header("Location: ../index.php");
        exit();
    }

    $authController = new AuthController();
    $authController->login($user);

    var_dump("Email" . " " . $email, "Password" . " " . $password);
}
