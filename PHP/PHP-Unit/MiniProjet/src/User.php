<?php
declare(strict_types=1);

namespace MiniProjet;

use InvalidArgumentException;

class User
{
    private const MAX_NAME_LENGTH = 50;
    private const PASSWORD_MIN_LENGTH = 5;
    private const VALID_ROLES = ['ADMIN', 'USER', 'ANONYMOUS'];

    private string $firstName;
    private string $lastName;
    private string $email;
    private string $password;
    private array $roles;

    public function __construct(string $firstName, string $lastName, string $email, string $password, array $roles = ['ANONYMOUS'])
    {
        $this->updateFirstName($firstName);
        $this->updateLastName($lastName);
        $this->updateEmail($email);
        $this->updatePassword($password);
        $this->updateRoles($roles);
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

    // Setters (avec validation)
    public function updateFirstName(string $firstName): void
    {
        $this->ensureIsValidFirstName($firstName);
        $this->firstName = $firstName;
    }

    public function updateLastName(string $lastName): void
    {
        $this->ensureIsValidLastName($lastName);
        $this->lastName = $lastName;
    }

    public function updateEmail(string $email): void
    {
        $this->ensureIsValidEmail($email);
        $this->email = $email;
    }

    public function updatePassword(string $password): void
    {
        $this->ensureIsValidPassword($password);
        $this->password = $password;
    }

    public function updateRoles(array $roles): void
    {
        $this->ensureIsValidRoles($roles);
        $this->roles = array_unique($roles);
    }

    // Gestion des rôles
    public function addRole(string $newRole): void
    {
        if (!in_array($newRole, $this->roles, true)) {
            $this->ensureIsValidRoles([$newRole]);
            $this->roles[] = $newRole;
        }
    }

    public function removeRole(string $role): void
    {
        $this->roles = array_filter(
            $this->roles,
            fn($existingRole) => $existingRole !== $role
        );
    }

    public function hasRole(string $role): bool
    {
        return in_array($role, $this->roles, true);
    }

    // Méthodes de validation
    private function ensureIsValidFirstName(string $firstName): void
    {
        if (empty($firstName)) {
            throw new InvalidArgumentException('First name cannot be empty');
        }
        if (strlen($firstName) > self::MAX_NAME_LENGTH) {
            throw new InvalidArgumentException('First name cannot exceed ' . self::MAX_NAME_LENGTH . ' characters');
        }
    }

    private function ensureIsValidLastName(string $lastName): void
    {
        if (empty($lastName)) {
            throw new InvalidArgumentException('Last name cannot be empty');
        }
        if (strlen($lastName) > self::MAX_NAME_LENGTH) {
            throw new InvalidArgumentException('Last name cannot exceed ' . self::MAX_NAME_LENGTH . ' characters');
        }
    }

    private function ensureIsValidEmail(string $email): void
    {
        if (empty($email)) {
            throw new InvalidArgumentException('Email cannot be empty');
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException('Invalid email format');
        }
    }

    private function ensureIsValidPassword(string $password): void
    {
        if (strlen($password) < self::PASSWORD_MIN_LENGTH) {
            throw new InvalidArgumentException('Password must be at least ' . self::PASSWORD_MIN_LENGTH . ' characters long');
        }
    }

    private function ensureIsValidRoles(array $roles): void
    {
        foreach ($roles as $role) {
            if (!in_array($role, self::VALID_ROLES, true)) {
                throw new InvalidArgumentException('Invalid role: ' . $role);
            }
        }
    }
}
