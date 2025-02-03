<?php

require "config/Router.php";

$route = isset($_GET['route']) ? $_GET['route'] : null;
// $router = new Router();
// $router->handleRequest();

require 'templates/layout.phtml';