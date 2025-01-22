<?php

require_once "Character.class.php";

class Warrior extends AbstractCharacter {

    protected int $rage;

    public function __construct(int $life, string $name, int $rage) {
        $charisma = random_int(8, 14);
        parent::__construct($name, 1000, 14, 12, 10, $charisma);
        $this->rage = $rage;
    }

    public function getRage() :int {
        return $this->rage;
    }

    public function setRage(int $rage) :int {
        return $this->rage = $rage;
    }

    public function strike() :int {
        return (int)(random_int(0, 100) / 100 * $this->strength);
    }

    public function present(): string 
    {
        $lifeBar = generateBar($this->life, 1000, "vie");
        $rageBar = generateBar($this->rage, 1000, "rage");

        return $this->introduce() . "<br><br><br>" . $lifeBar . "<br><br>" . $rageBar;
    }
}