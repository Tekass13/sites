<?php

require "managers/UserManager.php";

class UserController{

    public function __construct() {}

    public function list() : void {
        $route = "list";
        $userManager = new UserManager();
        $users = $userManager->findAll();

        require "templates/layout.phtml";
    }

    public function show() : void {
        $route = "show";

        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $userManager = new UserManager();
            $user = $userManager->findOne($id);

            require "templates/layout.phtml";
        } else {

            header("Location: ../index.php");
            exit();
        }
    }

    public function create() : void {
        $route = "create";
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $firstName = htmlspecialchars($_POST['firstName']);
            $lastName = htmlspecialchars($_POST['lastName']);
            $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

            if ($firstName && $lastName && $email) {
                $user = new User($firstName, $lastName, $email);
                $userManager = new UserManager();
                $userManager->create($user);
                header("Location: ../index.php");
                exit();
            }
        }

        require "templates/layout.phtml";
    }

    public function update() : void {
        $route = "update";

        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $userManager = new UserManager();
            $user = $userManager->findOne($id);

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {

                $firstName = htmlspecialchars($_POST['firstName']);
                $lastName = htmlspecialchars($_POST['lastName']);
                $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

                if ($firstName && $lastName && $email) {
                    $user->setFirstName($firstName);
                    $user->setLastName($lastName);
                    $user->setEmail($email);


                    $userManager->update($user);
                    header("Location: ../index.php");
                    exit();
                }
            }
            require "templates/layout.phtml";

        } else {

            header("Location: ../index.php");
            exit();
        }
    }

    // public function checkCreate() : void {
    //     if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    //         $firstName = htmlspecialchars($_POST['firstName']);
    //         $lastName = htmlspecialchars($_POST['lastName']);
    //         $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    //         if ($firstName && $email && $password && $role) {
    //             $user = new User($firstName, $email, $password, $role);
    //             $userManager = new UserManager();
    //             $userManager->create($user);
    //             header("Location: ../index.php");
    //             exit();
    //         }
    //     }
    // }

    // public function checkUpdate() : void {
    //     if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['id'])) {

    //         $id = intval($_GET['id']);
    //         $userManager = new UserManager();
    //         $user = $userManager->findOne($id);

    //         if ($user) {
    //             $firstName = htmlspecialchars($_POST['firstName']);
    //             $lastName = htmlspecialchars($_POST['lastName']);
    //             $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    //             if ($firstName && $email && $role) {
    //                 $user->setFirstName($firstName);
    //                 $user->setLastName($lastName);
    //                 $user->setEmail($email);

    //                 $userManager->update($user);
    //                 header("Location: ../index.php");
    //                 exit();
    //             }
    //         }
    //     }

    //     require "templates/update.phtml";
    // }

    public function delete() : void {
        if (isset($_GET['id'])) {

            $id = intval($_GET['id']);
            $userManager = new UserManager();
            $userManager->delete($id);

            header("Location: ../index.php");
            exit();

        } else {

            header("Location: ../index.php");
            exit();
        }
    }
}
