<?php

require_once "AbstractManager.php";

class UserManager extends AbstractManager
{
    public function __construct()
    {
        parent::__construct();
    }

    public function findAll(): array
    {
        $query = $this->db->query('SELECT * FROM users');
        $usersData = $query->fetchAll(PDO::FETCH_ASSOC);

        $users = [];
        foreach ($usersData as $userData) {
            $users[] = new User($userData);
        }

        return $users;
    }

    public function findOne(int $id): ?User
    {
        $query = $this->db->prepare('SELECT * FROM users WHERE id = :id');
        $parameters = [':id' => $id];
        $query->execute($parameters);

        $userData = $query->fetch(PDO::FETCH_ASSOC);

        if ($userData) {
            return new User($userData);
        } else {
            return null;
        }
    }

    public function create(User $user): void
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

    public function update(User $user): void
    {
        $query = $this->db->prepare('UPDATE users SET username = :username, email = :email, password = :password WHERE id = :id');
        $parameters = [
            ':username' => $user->getUserName(),
            ':email' => $user->getEmail(),
            ':password' => $user->getPassword(),
            ':id' => $user->getId()
        ];
        $query->execute($parameters);
    }

    public function delete(int $id): void
    {
        $query = $this->db->prepare('DELETE FROM users WHERE id = :id');
        $parameters = [':id' => $user->getId()];
        $query->execute($parameters);
    }
}
