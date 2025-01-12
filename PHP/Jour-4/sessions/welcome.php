<?php
session_start();

if (isset($_SESSION['nickname'])) {
    $nickname = $_SESSION['nickname'];
    echo "Bienvenue " . htmlspecialchars($nickname);
} else {
    echo "Bienvenue invité";
}
