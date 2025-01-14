<?php
require_once "managers/UserManager.class.php";

$userManager = new UserManager($db, []);
$userManager->loadUsers();
$users = $userManager->getUsers();
