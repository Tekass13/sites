<?php
require __DIR__ . '/../connexion.php';
require __DIR__ . '/../models/User.class.php';

class UserManager
{
    public function __construct(private PDO $db, private ?array $users = []) {}

    public function getUsers(): array
    {
        return $this->users;
    }

    public function setUsers(array $users): array
    {
        return $this->users = $users;
    }

    public function loadUsers(): void
    {

        $query = $this->db->prepare('SELECT * FROM users');
        $query->execute();
        $usersData = $query->fetchAll(PDO::FETCH_ASSOC);
        $users = [];

        foreach ($usersData as $userData) {
            $user = new User(
                $userData["username"],
                $userData["email"],
                $userData["password"],
                $userData["role"],
                $userData["created_at"],
            );
            $lastInsertId = $this->db->lastInsertId();
            $user->setId($userData["id"]);
            $users[] = $user;
        }
        $this->setUsers($users);
    }


    public function saveUser(User $user): void
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


    public function deleteUser(int $id): void
    {
        $query = $this->db->prepare('DELETE FROM users WHERE id = :id');
        $parameters = [':id' => $id];
        $query->execute($parameters);
    }
}
