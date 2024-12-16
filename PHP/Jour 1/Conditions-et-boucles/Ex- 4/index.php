<?php
    $users = [
        [
            "firstName" => "Hugues",
            "lastName" => "Froger"
        ],
        [
            "firstName" => "Mari",
            "lastName" => "Doucet"
        ]
    ];

    foreach($users as $values) {
        foreach($values as $value) {
            print_r($value."</br>");
        };
    };
?>