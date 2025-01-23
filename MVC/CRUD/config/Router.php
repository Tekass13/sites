<?php

class Router {

    public function __construct() {}

    public function handleRequest() : string{

        require_once 'controllers/UserController.php';

        //$userController = new UserController();

        $route = isset($_GET['route']) ? $_GET['route'] : null;

        if ($route === 'show_user') {
            //$userController->show();
        } elseif ($route === 'create_user') {
            //$userController->create();
        } elseif ($route === 'check_create_user') {
            //$userController->checkCreate();
        } elseif ($route === 'update_user') {
            //$userController->update();
        } elseif ($route === 'check_update_user') {
            //$userController->checkUpdate();
        } elseif ($route === 'delete_user') {
            //$userController->delete();
        } else {
            //$userController->list();
        }
    }
}