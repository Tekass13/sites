<?php
// require('connexion.php');

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $street = $_POST['street'] ?? null;
//     $city = $_POST['city'] ?? null;
//     $zipcode = $_POST['zipcode'] ?? null;

//     if ($street && $city && $zipcode) {
//         $query = $db->prepare('INSERT INTO address (street, city, zipcode) VALUES (:street, :city, :zipcode)');

//         $query->execute([
//             'street' => $street,
//             'city' => $city,
//             'zipcode' => $zipcode
//         ]);

//         echo "L'adresse a été ajoutée avec succès !";
//     } else {
//         echo "Veuillez remplir tous les champs du formulaire.";
//     }
// }
