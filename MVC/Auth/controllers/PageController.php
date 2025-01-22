<?php

class PageController {

    public function __construct() {

    }

    public function home() : void {
        $route = "home";
        require "templates/layout.phtml";
    }
    
    public function register() : void {
        $route = "inscription";
        require "templates/layout.phtml";
    }

    public function login() : void {
        $route = "connexion";
        require "templates/layout.phtml";
    }

    public function notFound() : void {
        $route = "notFound";
        require "templates/layout.phtml";
    }
}