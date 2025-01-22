<?php

function generateBar(int $value, int $maxValue, string $type): string
{
    $barLength = 20;
    $filledLength = (int) (($value / $maxValue) * $barLength);
    $emptyLength = $barLength - $filledLength;

    $filledBar = str_repeat("█", $filledLength);
    $emptyBar = str_repeat("░", $emptyLength);

    return ucfirst($type) . ": " . $filledBar . $emptyBar . " ($value/$maxValue)";
}

class Character 
{
    protected int $life;
    protected string $name;

    public function __construct()
    {
    }

    public function getLife(): int 
    {
        return $this->life;
    }

    public function setLife(int $life): void 
    {
        $this->life = $life;
    }

    public function getName(): string 
    {
        return $this->name;
    }

    public function setName(string $name): void 
    {
        $this->name = $name;
    }

    protected function introduce(): string 
    {
        return "Bonjour je m'appelle " . $this->name;
    }
}

class Warrior extends Character 
{
    private int $energy;

    public function __construct(int $life, string $name, int $energy)
    {
        $this->life = $life;
        $this->name = $name;
        $this->energy = $energy;
    }

    public function getEnergy(): int 
    {
        return $this->energy;
    }

    public function setEnergy(int $energy): void 
    {
        $this->energy = $energy;
    }

    public function present(): string 
    {
        $lifeBar = generateBar($this->life, 1500, "vie");
        $energyBar = generateBar($this->energy, 800, "énergie");

        return $this->introduce() . "<br><br><br>" . $lifeBar . "<br><br>" . $energyBar;
    }
}

class Mage extends Character 
{
    private int $mana;

    public function __construct(int $life, string $name, int $mana)
    {
        $this->life = $life;
        $this->name = $name;
        $this->mana = $mana;
    }

    public function getMana(): int 
    {
        return $this->mana;
    }

    public function setMana(int $mana): void 
    {
        $this->mana = $mana;
    }

    public function present(): string 
    {
        $lifeBar = generateBar($this->life, 1000, "vie");
        $manaBar = generateBar($this->mana, 1000, "mana");

        return $this->introduce() . "<br><br><br>" . $lifeBar . "<br><br>" . $manaBar;
    }
}
?>
