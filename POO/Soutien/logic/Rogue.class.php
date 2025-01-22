<?php

require_once "Character.class.php";

class Rogue extends AbstractCharacter {

    protected int $energy;

    public function __construct(int $life, string $name, int $energy) {
        $charisma = random_int(8, 14);
        parent::__construct($name, 1000, 12, 15, 11, $charisma);
        $this->energy = $energy;
    }

    public function getEnergy() : int {
        return $this->energy;
    }

    public function setEnergy(int $energy) : void {
        $this->energy = $energy;
    }

    public function stab() : int {
        return (int)(random_int(0, 100) / 100 * $this->agility);
    }

    public function present(): string 
    {
        $lifeBar = generateBar($this->life, 1000, "vie");
        $energyBar = generateBar($this->energy, 1000, "energy");

        return $this->introduce() . "<br><br><br>" . $lifeBar . "<br><br>" . $energyBar;
    }
}