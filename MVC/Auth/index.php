<?php

require "config/autoload.php";

session_start();

$route = new Router();
$route->handleRequest($_GET);