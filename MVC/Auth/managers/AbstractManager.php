<?php

abstract class AbstractManager
{
    protected $db;

    public function __construct()
    {
        $this->db = new PDO('mysql:host=localhost;dbname=kevincarmon_userbase_poo', 'root', '');
    }
}
