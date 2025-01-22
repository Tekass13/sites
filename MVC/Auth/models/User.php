<?php

class User
{
    private ?int $id = null;

    public function __construct(private ?string $username = "", private ?string $email = "", private ?string $password = "", private ?string $role = "USER") {}

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): int
    {
        return $this->id = $id;
    }

    public function getUserName(): string
    {
        return $this->username;
    }

    public function setUserName(string $username): string
    {
        return $this->username = $username;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): string
    {
        return $this->email = $email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): string
    {
        return $this->password = $password;
    }

    public function getRole(): string
    {
        return $this->role;
    }

    public function setRole(string $role): string
    {
        return $this->role = $role;
    }
}
