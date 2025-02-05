<?php
namespace MiniProjet;

class User
{
    private string $firstName;
    private string $lastName;
    private string $email;
    private string $password;
    private array $roles;

    public function __construct(string $firstName, string $lastName, string $email, string $password, array $roles = ['ANONYMOUS'])
    {
        if (empty($firstName)) {
            throw new \Exception("First name cannot be empty");
        }

        if (empty($lastName)) {
            throw new \Exception("Last name cannot be empty");
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception("Invalid email address");
        }

        if (!preg_match('/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/', $password)) {
            throw new \Exception("Password must be at least 8 characters, contain a number, an uppercase letter, and a special character");
        }

        if (!in_array('ANONYMOUS', $roles)) {
            $roles[] = 'ANONYMOUS';
        }

        if (in_array('USER', $roles) || in_array('ADMIN', $roles)) {
            $roles = array_diff($roles, ['ANONYMOUS']);
        }

        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->password = $password;
        $this->roles = array_unique($roles);
    }

    // Getters
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getRoles(): array
    {
        return $this->roles;
    }

    // Setters
    public function setFirstName(string $firstName): void
    {
        if (empty($firstName)) {
            throw new \Exception("First name cannot be empty");
        }
        $this->firstName = $firstName;
    }

    public function setLastName(string $lastName): void
    {
        if (empty($lastName)) {
            throw new \Exception("Last name cannot be empty");
        }
        $this->lastName = $lastName;
    }

    public function setEmail(string $email): void
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception("Invalid email address");
        }
        $this->email = $email;
    }

    public function setPassword(string $password): void
    {
        if (!preg_match('/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/', $password)) {
            throw new \Exception("Password must be at least 8 characters, contain a number, an uppercase letter, and a special character");
        }
        $this->password = $password;
    }

    public function addRole(string $newRole): array
    {
        if (!in_array($newRole, ['ANONYMOUS', 'USER', 'ADMIN'])) {
            throw new \Exception("Invalid role");
        }
        if ($newRole === 'USER' || $newRole === 'ADMIN') {
            $this->roles = array_diff($this->roles, ['ANONYMOUS']);
        }
        $this->roles[] = $newRole;
        $this->roles = array_unique($this->roles);
        return $this->roles;
    }

    public function removeRole(string $role): array
    {
        $this->roles = array_diff($this->roles, [$role]);
        if (empty($this->roles)) {
            $this->roles[] = 'ANONYMOUS';
        }
        return $this->roles;
    }
}
