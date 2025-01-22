<?php

class AuthController {

    public function __construct() {}
    
    public function register() {
        if (isset($_POST['first_name'], $_POST['last_name'], $_POST['email'], $_POST['password'])) {
            $first_name = $_POST['first_name'];
            $last_name = $_POST['last_name'];
            $email = $_POST['email'];
            $password = $_POST['password'];
        
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
            $query = $db->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
            $parameters = [
                'firstname' => $first_name,
                'last_name' => $last_name,
                'email$' => $email,
                'password' => $password
            ];
            $query->execute($parameters);
        
            header('Location: ../home.phtml');
            exit();
        } else {
            header('Location: ../register.phtml');
            exit();
        }
    }

    public function login() {
        if (isset($_POST['email'], $_POST['password'])) {
            $email = $_POST['email'];
            $password = $_POST['password'];
        
            $query = $db->prepare("SELECT * FROM users WHERE email = ?");
            $query->execute([$email]);
        
            $user = $query->fetch(PDO::FETCH_ASSOC);
        
            if ($user) {
                header('Location: ../home.phtml');
                exit();
            }
        }
    }
}