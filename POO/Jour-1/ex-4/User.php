<?php

class User
{
    private ?int $id = null;

    public function __construct(private string $firstName, private string $lastName, private string $email) {}

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(string $id): int
    {
        return $this->id = $id;
    }


    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): string
    {
        return $this->firstName = $firstName;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): string
    {
        return $this->lastName = $lastName;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): string
    {
        return $this->email = $email;
    }
}
