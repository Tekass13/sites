<?php

class AbstractCharacter {

    public function __construct(protected string $name, protected int $life, protected int $strength, protected int $agility, protected int $intelligence, protected int $charisma) {}

    public function getName() :string {
        return $this->name;
    }

    public function setName(string $name) :string {
        return $this->name = $name;
    }

    public function getLife() :string {
        return $this->life;
    }

    public function setLife(int $life) :int {
        return $this->life = $life;
    }
    
    public function getStrength() :int {
        return $this->strength;
    }

    public function setStrength(int $strength) :int {
        return $this->strength = $strength;
    }

    public function getAgility() :int {
        return $this->agility;
    }

    public function setAgility(int $agility) :int {
        return $this->agility = $agility;
    }

    public function getIntelligence() :int {
        return $this->intelligence;
    }

    public function setIntelligence(int $intelligence) :int {
        return $this->intelligence = $intelligence;
    }

    public function getCharisma() :int {
        return $this->charisma;
    }

    public function setCharisma(int $charisma) :int {
        return $this->charisma = $charisma;
    }

    public function introduce(): string 
    {
        return "Character name: " . $this->name;
    }

    public function takeDamages(int $damages) :void {
        if ($life > 0) {
            $this->$life -= $damages;
        }
    }
}