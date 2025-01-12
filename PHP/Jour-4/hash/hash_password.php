<?php
$password = $_POST["password"];

$hash = password_hash($password, PASSWORD_DEFAULT);

echo $hash;
//motdepasse
//$2y$10$3bEYUygeci3rqLmj18zbUu0j.IiEic/NrRNAxPcWnS5S73ib7lu4C