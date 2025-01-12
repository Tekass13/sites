<?php

function getCategory(int $categoryId): array
{
    // remplissez cette fonction pour qu'elle puisse récupérer toutes les infos d'une catégorie

    return [];
}

function getCategories(): array
{
    // remplissez cette fonction pour qu'elle puisse récupérer toutes les infos de toutes les catégories

    return [];
}

function getPostsForCategory(int $categoryId): array
{
    // remplissez cette fonction pour qu'elle puisse récupérer tous les articles d'une catégorie ainsi que les infos de leur image

    require __DIR__ . "/../connexion.php";

    $query = $db->prepare('SELECT posts.*, medias.url, medias.alt FROM posts JOIN categories ON posts.category = categories.id JOIN medias ON posts.image = medias.id WHERE categories.id = :id_category');
    $parameters = ["id_category" => $categoryId];
    $query->execute($parameters);
    $posts = $query->fetchAll(PDO::FETCH_ASSOC);

    return $posts;
}
