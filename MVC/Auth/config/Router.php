<?php

class Router {

    public function __construct() {}

    public function handleRequest(array $get) : void {
        if (isset($get["route"]) && $get["route"] === "home") {
            $pageController = new PageController();
            $pageController->home();
        } elseif (isset($get["route"]) && $get["route"] === "inscription") {
            $pageController = new PageController();
            $pageController->register();
        } elseif (isset($get["route"]) && $get["route"] === "connexion") {
            $pageController = new PageController();
            $pageController->login();
        } elseif (isset($get["route"]) && $get["route"] === "deconnexion") {
            $pageController = new PageController();
            $pageController->deconnexion();
        } else {
            $pageController = new PageController();
            $pageController->notFound();
        }
    }
}