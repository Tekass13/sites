<?php
require "character.php";

$character = new Character("Ragnar");
$weapon = $character->getWeapon()->setName("Sword");
$damages = $character->getWeapon()->setDamages(10);

echo "{$character->getName()} {$character->getWeapon()->getName()} {$character->getWeapon()->getDamages()} <br>";
echo $character->fight();
