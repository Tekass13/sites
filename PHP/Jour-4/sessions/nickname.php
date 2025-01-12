<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nickname = $_POST['nickname'];
    $_SESSION['nickname'] = $nickname;
    echo "Le nom a été stocké dans la session : " . $_SESSION['nickname'];
}
