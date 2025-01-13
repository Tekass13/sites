<?  php
class Personnage
{
    public function __construct(private string $nom, private int $vie)
    {

    }

    public function getNom() : string
    {
        return $this->nom;
    }

    public function setNom(string $nom) : void
    {
        $this->nom = $nom;
    }

    public function getVie() : int
    {
        return $this->vie;
    }

    public function setVie(int $vie) : void
    {
        $this->vie = $vie;
    }
}

// Décrire la classe : quel est son nom ? Elle a quoi comme attributs ? Elle a quoi comme méthodes ? Comment feriez-vous pour créer une instance de cette classe ?

// Classe = Personnage (private)
// Attributs = $nom, $vie (private)
// Methodes = getNom(), setNom(string $nom), getVie(), setVie() (public)

$player = new Personnage("kevin", 100);
$name = $player->getNom();
$vie = $player->getVie();