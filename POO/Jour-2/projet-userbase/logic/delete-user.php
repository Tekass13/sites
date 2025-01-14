<?php

require_once "../managers/UserManager.class.php";

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    echo "ID reçu: " . $id;
    $userManager = new UserManager($db, []);
    $userManager->deleteUser($id);
    // header("Location: ../index.php"); // Redirection après suppression (débarrassé du code commenté)
    // exit();
}
