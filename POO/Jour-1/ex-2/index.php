<?php
require "./Character.php";

$character = new Character(1);
$fullName = $character->getFullName();

echo $fullName;

$newFirstName = "Sarah";
$newLastName = "Connor";

$setFirstName = $character->setFirstName($newFirstName);
$setLastName = $character->setLastName($newLastName);
$fullName = $character->getFullName();

echo $fullName;
