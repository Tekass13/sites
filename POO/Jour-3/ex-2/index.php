<?php

require_once "logic/Character.class.php";
require_once "logic/Warrior.class.php";
require_once "logic/Mage.class.php";

$character = new Character();
$character->setName("tekass");
$character->setLife(100);
echo "Simple humain : Bonjour je m'appelle " . $character->getName() . "<br>";

$warrior = new Warrior(1500, "Thor", 1000);
echo $warrior->present() . "<br>";

$mage = new Mage(1000, "Gandalf", 1000);
echo $mage->present() . "<br>";
