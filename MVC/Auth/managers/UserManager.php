<?php

require_once "AbstractManager.php";
require_once "../models/User.php";

class UserManager extends AbstractManager
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getUsers(): array
    {
        return $this->users;
    }

    public function setUsers(array $users): array
    {
        return $this->users = $users;
    }

    public function getUser(): array
    {
        return $this->user;
    }

    public function setUser(User $user): User
    {
        return $this->user = $user;
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
}