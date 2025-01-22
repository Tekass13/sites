<?php

require_once __DIR__ .  "\models\Category.class.php";
require_once __DIR__ .  "\models\Post.class.php";
require_once __DIR__ .  "\managers\UserManager.class.php";

$user = new User("mari", "mari@test.fr", password_hash('securepassword', PASSWORD_DEFAULT), "USER", new DateTime());

// echo "<pre>";
// var_dump($user);
// echo "</pre>";

$category = new Category("Accessibilité", "Les articles traitant de l'accessibilité web");

// echo "<pre>";
// var_dump($category);
// echo "</pre>";

$post = new Post("Mettez des alt", "On oublie trop souvent les textes alternatifs des balises images...", "Et c'est pas bien ça me rend tout-e colère !", $user, new DateTime());

// echo "<pre>";
// var_dump($post);
// echo "</pre>";

$post->addCategory($category);

// echo "<pre>";
// var_dump($post);
// echo "</pre>";

$category->addPost($post);

// echo "<pre>";
// var_dump($category);
// echo "</pre>";

$userManager = new UserManager();

$userManager->create($user);
