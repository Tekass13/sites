<?php
$host = "127.0.0.1";
$port = "3306";
$dbname = "kevincarmon_phpj5";
$connexionString = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8";

$user = "root";
$password = "";

$db = new PDO(
    $connexionString,
    $user,
    $password
);
