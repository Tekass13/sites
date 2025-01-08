<?php

function routing() : string {
    if (isset($_GET["route"]) && $_GET["route"] === "about") {
        return "about";
    } elseif (isset($_GET["route"]) && $_GET["route"] === "contact") {
        return "contact";
    } else {
        return "homepage";
    }
}

$template = routing();

require "templates/layout.phtml";

?>