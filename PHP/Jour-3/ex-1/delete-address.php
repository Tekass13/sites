<?php
require('connexion.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;

    if ($id) {
        $query = $db->prepare('DELETE FROM address WHERE address.id = :id');

        $query->execute([
            'id' => $id
        ]);

        echo "L'adresse a été supprimé avec succès !";
    } else {
        echo "Veuillez remplir tous les champs du formulaire.";
    }
}
