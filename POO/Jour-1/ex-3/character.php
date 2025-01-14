<?php

require "weapon.php";

class Character
{
    private Weapon $weapon;

    public function __construct(private string $name)
    {
        $this->weapon = new Weapon("", 0);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): string
    {
        return $this->name = $name;
    }

    public function getWeapon(): Weapon
    {
        return $this->weapon;
    }

    public function setWeapon(string $weapon): string
    {
        return $this->weapon = $weapon;
    }

    public function strike(): string
    {
        return "Mais aïeuh! <br>";
    }

    public function fight(): string
    {
        return $this->getWeapon()->strike();
    }
}
