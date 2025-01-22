<?php

require_once "../managers/UserManager.class.php";

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $userManager = new UserManager($db, []);
    $userManager->deleteUser($id);
    header("Location: ../index.php");
    exit();
}
