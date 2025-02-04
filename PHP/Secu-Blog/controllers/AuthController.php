<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */

class AuthController extends AbstractController
{
    public function __construct()
    {
        $lang = $_SESSION["lang"];

        parent::__construct("auth", $lang);
    }

    public function login(): void
    {
        $CSRFTokenManager = new CSRFTokenManager();

        // Vérification de la session utilisateur
        if (empty($_SESSION['csrf_token'])) {

            $csrfToken = $CSRFTokenManager->generateCSRFToken();
            $_SESSION['csrf_token'] = $csrfToken;
        } else {

            $csrfToken = $_SESSION['csrf_token'];
        }

        $this->render("login", ['csrf-token' => $csrfToken]);
    }

    public function checkLogin(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
            // Récupération des données utilisateur
            $email = $_POST['email'] ?? '';
            $password = $_POST['password'] ?? '';
            $token = $_POST['csrf-token'] ?? '';

            // Création des instances de classes
            $userManager = new UserManager();
            $CSRFTokenManager = new CSRFTokenManager();
            $user = $userManager->findByEmail($email);

            // Si l'email correspond à un utilisateur
            if ($user) {


                // Vérification correspondance des tokens
                $validate = $CSRFTokenManager->validateCSRFToken($token);
                if (!$validate) {
                    // var_dump($token);
                    die("Erreur CSRF.");
                }

                // Vérification des champs du formulaire
                if (empty($email) || empty($password)) {
                    var_dump($email, $password);
                    $this->redirect("index.php?route=login&error=empty_fields");
                    return;
                }
                
                // Vérification format email
                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    var_dump($email);
                    $this->redirect("index.php?route=login&error=invalid_email");
                    return;
                }

                // Vérification mot de passe
                if (!password_verify($_POST['password'], $user->getPassword())) {
                    var_dump($password, $user->getPassword());
                    $this->redirect("index.php?route=login&error=invalid_credentials");
                    return;
                }

                $_SESSION['user'] = $user->getId();
                $_SESSION['username'] = $user->getUserName();

                $this->redirect("index.php");

            } else {
                $this->redirect("index.php?route=login");
            }
        } else {
            $this->redirect("index.php?route=login");
        }
    }

    public function register(): void
    { 
        $CSRFTokenManager = new CSRFTokenManager();

        // Vérification de la session utilisateur
        if (empty($_SESSION['csrf_token'])) {

            $csrfToken = $CSRFTokenManager->generateCSRFToken();
            $_SESSION['csrf_token'] = $csrfToken;
        } else {

            $csrfToken = $_SESSION['csrf_token'];
        }

        $this->render("register", ['csrf-token' => $csrfToken]);
    }


    public function checkRegister(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            
            // Récupération des données utilisateur
            $username = htmlspecialchars($_POST['username']) ?? '';
            $email = $_POST['email'] ?? '';
            $password = $_POST['password'] ?? '';
            $confirmPassword = $_POST['confirm-password']?? '';
            $token = $_POST['csrf-token'] ?? '';

            // Création des instances de classes
            $userManager = new UserManager();
            $CSRFTokenManager = new CSRFTokenManager();
            $passwordManager = new PasswordManager();

            // Assignation des données utilisateur
            $user = new User();
            $user->setUserName($username);
            $user->setEmail($email);
            $user->setPassword($password);
            $createUser = $userManager->create($user);

            // Vérification données utilisateur
            $validate = $CSRFTokenManager->validateCSRFToken($token);
            $verifyedPassword = $passwordManager->validatePassword($_POST['password']);
            $verifyedEmail = $userManager->findByEmail($email);

            // Vérification correspondance des tokens
            if (!$validate) {
                die("Erreur CSRF.");
            }

            // Vérification des champs du formulaire
            if (empty($email) || empty($password) || empty($confirmPassword)) {
                var_dump($email, $password, $confirmPassword);
                $this->redirect("index.php?route=register&error=empty_fields");
                return;
            }

            // Vérification correspondance email
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                var_dump($email);
                $this->redirect("index.php?route=register&error=invalid_email");
                return;
            }

            // Vérification correspondance mot de passe
            if ($_POST['password'] !== $_POST['confirm-password']) {
                var_dump($_POST['password'], $_POST['confirm-password']);
                $this->redirect("index.php?route=register&error=password_mismatch");
                return;
            }

            // Vérification fiabilité mot de passe
            if (!$verifyedPassword) {
                var_dump($_POST['password']);
                $this->redirect("index.php?route=register&error=weak_password");
                return;
            }
            
            // Vérification email
            if ($verifyedEmail === $email) {
                var_dump($verifyedEmail, $email);
                $this->redirect("index.php?route=register&error=email_exists");
                return;
            }

            // Création d'une session utilisateur
            if ($createUser) {

                $_SESSION['user'] = $user->getId();
                $_SESSION['username'] = $user->getUserName();

                $this->redirect("index.php");
            } else {
                $this->redirect("index.php?route=register&error=creation_failed");
            }
        } else {
            $this->redirect("index.php?route=register");
        }
    }

    public function logout(): void
    {
        // Déstruction de la session utilisateur
        session_destroy();
        $this->redirect("index.php");
    }

    public function getTranslator() : Translator
    {
        return $this->translator;
    }
    
    public function switchLang()
    {
        if($_SESSION["lang"] === "fr")
        {
            $_SESSION["lang"] = "en";
        }
        else
        {
            $_SESSION["lang"] = "fr";
        }

        $this->redirect("index.php");
    }
}
