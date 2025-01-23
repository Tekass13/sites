<?php

class UserManager extends AbstractManager
{
    public function __construct()
    {
        parent::__construct();
    }

    public function findAll() : ?array 
    {
        $query = $this->db->prepare('SELECT * FROM users');
        $query->execute();
        $usersData = $query->fetchAll(PDO::FETCH_ASSOC);
        $users = [];

        foreach ($usersData as $userData) {
            if ($userData) {
                $user = new User(
                    $userData["first_name"],
                    $userData["last_name"],
                    $userData["email"]
                );
                $user->setId($userData["id"]);
                $users[] = $user;
                return $users;
            }
        }

        return null;
    }

    public function findOne(int $id) : ?User
    {
        $query = $this->db->prepare('SELECT * FROM users WHERE id = :id');
        $parameters = [':id' => $id];
        $query->execute($parameters);
        $userData = $query->fetch(PDO::FETCH_ASSOC);

        if ($userData) {
            $user = new User(
                $userData["first_name"],
                $userData["last_name"],
                $userData["email"]
            );
            $user->setId($userData["id"]);
            return $user;
        }

        return null;
    }

    public function create(User $user) : void
    {   
        $query = $this->db->prepare('INSERT INTO users (first_name, last_name, email) VALUES (:first_name, :last_name, :email)');

        $parameters = [
            ':first_name' => $user->getFirstName(),
            ':last_name' => $user->getLastName(),
            ':email' => $user->getEmail()
        ];

        $user->setId($this->db->lastInsertId());

        $query->execute($parameters);
    }

    public function update(User $user) : void
    {
        $query = $this->db->prepare('UPDATE users SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id');

        $parameters = [
            ':first_name' => $user->getFirstName(),
            ':last_name' => $user->getLastName(),
            ':email' => $user->getEmail(),
            ':id' => $user->getId()
        ];

        $query->execute($parameters);
    }

    public function delete(int $id) : void
    {
        $query = $this->db->prepare('DELETE FROM users WHERE id = :id');
        $parameters = [':id' => $id];
    }
}
