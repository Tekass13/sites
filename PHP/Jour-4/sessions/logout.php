<?php
session_start();

if (isset($_SESSION['nickname'])) {
    echo "Deconnexion du compte " . htmlspecialchars($_SESSION['nickname']);
    $_SESSION = array();
    session_destroy();
} else {
    echo "Vous n'êtes pas connecté !";
}
