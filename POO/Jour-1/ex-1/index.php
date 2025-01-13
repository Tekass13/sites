<?php
require "./User.php";

$user1 = new User(1, "admin", "admin");
$user2 = new User(2, "user", "user");

$id1 = $user1->getId();
$username1 = $user1->getUserName();
$password1 = $user1->getPassword();

$id2 = $user2->getId();
$username2 = $user2->getUserName();
$password2 = $user2->getPassword();

echo ($id1 . " " . $username1 . " " . $password1 . "<br>");
echo ($id2 . " " . $username2 . " " . $password2);
