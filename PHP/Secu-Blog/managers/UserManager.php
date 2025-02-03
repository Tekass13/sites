<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */

class UserManager extends AbstractManager
{
    public function __construct() {
        parent::__construct();
    }

    public function findByEmail(string $email): ?User
    {
        $query = $this->db->prepare('SELECT * FROM users WHERE email = :email');
        $parameters = [':email' => $email];
        $query->execute($parameters);

        $data = $query->fetch(PDO::FETCH_ASSOC);
        if ($data) {
            $user = new User(
                $data["username"],
                $data["email"],
                $data["password"],
                $data["role"],
                $data["created_at"],
            );
            $lastInsertId = $this->db->lastInsertId();
            $user->setId($data["id"]);

            return $user;
        } else {
            return null;
        }
    }

    public function create(User $user): bool
    {
        $query = $this->db->prepare('INSERT INTO users (username, email, password, role, created_at) VALUES (:username, :email, :password, "USER", NOW())');

        $parameters = [
            ':username' => $user->getUserName(),           
            ':email' => $user->getEmail(),
            ':password' => password_hash($user->getPassword(), PASSWORD_BCRYPT)
        ];

        $user->setId($this->db->lastInsertId());

        return $query->execute($parameters);
    }
}

