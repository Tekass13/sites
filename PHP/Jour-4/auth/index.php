<?php
session_start();

require "connexion.php";

$route = isset($_GET['route']) ? $_GET['route'] : null;

require "layout.phtml";
