<?php
require_once "UserManager.php";

class AuthController extends UserManager {

    public function __construct() {
        parent::__construct();
    }

    public function login(string $email, string $password): void
    {
        $query = $this->db->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
        $query->execute([$email, $password]);
        $userData = $query->fetch(PDO::FETCH_ASSOC);

        if ($userData && $email === $userData["email"] && $password === $userData["password"]) {
            $user = new User(
                $userData["username"],
                $userData["email"],
                $userData["password"],
                $userData["role"],
                $userData["created_at"]
            );
        
            $this->setUser($user);
        }
    }

    public function register(User $user): void
    {
        $query = $this->db->prepare('INSERT INTO users (username, email, password, role, created_at) VALUES (:username, :email, :password, :role, NOW())');
        $parameters = [
            ':username' => $user->getUserName(),
            ':email' => $user->getEmail(),
            ':password' => $user->getPassword(),
            ':role' => $user->getRole(),
        ];
        $query->execute($parameters);
        $lastInsertId = $this->db->lastInsertId();
        $user->setId($lastInsertId);
    }
}