<?php

require_once "Character.class.php";

class Mage extends AbstractCharacter {

    protected int $mana;

    public function __construct(int $life, string $name, int $mana) {
        $charisma = random_int(8, 14);
        parent::__construct($name, 1000, 10, 12, 15, $charisma);
        $this->mana = $mana;
    }

    public function getMana() : int {
        return $this->mana;
    }

    public function setMana(int $mana) : int {
        return $this->mana = $mana;
    }

    public function cast() : int {
        return (int)(random_int(0, 100) / 100 * $this->intelligence);
    }

    
    public function present(): string 
    {
        $lifeBar = generateBar($this->life, 1000, "vie");
        $manaBar = generateBar($this->mana, 1000, "mana");

        return $this->introduce() . "<br><br><br>" . $lifeBar . "<br><br>" . $manaBar;
    }
}