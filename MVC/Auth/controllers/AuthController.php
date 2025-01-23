<?php
require_once "../managers/UserManager.php";

class AuthController extends UserManager {

    public function __construct() {
        parent::__construct();
    }

    public function login(User $user): void
    {
        $this->setUser($user);
    }

    public function register(User $user): void
    {
        $this->setUser($user);
    }
}