<?php
require('connexion.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;
    $street = $_POST['street'] ?? null;
    $city = $_POST['city'] ?? null;
    $zipcode = $_POST['zipcode'] ?? null;

    if ($id && $street && $city && $zipcode) {
        $query = $db->prepare('UPDATE address SET street = :street, city = :city, zipcode = :zipcode WHERE id = :id');

        $query->execute([
            'id' => $id,
            'street' => $street,
            'city' => $city,
            'zipcode' => $zipcode
        ]);

        echo "L'adresse a été modifiée avec succès !";
    } else {
        echo "Veuillez remplir tous les champs du formulaire.";
    }
}
