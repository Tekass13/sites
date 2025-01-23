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

}