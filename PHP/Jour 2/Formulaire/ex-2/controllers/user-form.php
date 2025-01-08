<?php
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    $confirm = $_POST['confirm'];
    $checkbox = $_POST['checkbox'];
    
    if ($confirm === $pass) {
        echo "Mot de pass correct";
    } else {
        echo "Mot de pass incorrect";
    }

    if (isset($checkbox)) {
        echo "Email : {$mail} | Mot de passe : {$pass} | Newsletter : Oui";
    } else {
        echo "Email : {$mail} | Mot de passe : {$pass} | Newsletter : Non";
    }

?>