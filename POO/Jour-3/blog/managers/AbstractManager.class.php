<?php

require_once "connexion.php";

abstract class AbstractManager
{
    protected $db;

    public function __construct()
    {
        $this->db = new PDO('mysql:host=localhost;dbname=kevincarmon_blog_poo', 'root', '');
    }
}
