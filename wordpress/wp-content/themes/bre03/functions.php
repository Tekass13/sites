<?php
/* Je crée l'emplacement de menu pour mon thème */
register_nav_menu("Primary", "Le menu principal du site");
if (function_exists( 'add_theme_support' )) {
    add_theme_support( 'post-thumbnails' );
}
/* Fonction qui récupère la liste des projets */
function getProjects() : array
{
    $args = array(
        'post_type' => 'projet',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'title',
        'order'   => 'ASC'
    );

    $projets = get_posts( $args );

    return $projets;
}

/* Récupérer les infos d'un projet */
function getProject() : array
{
    $project = [];
    $project["titre"] = get_the_title();
    $project["description"] = get_field("description_du_projet");
    $project["technologies"] = get_field("technologies_projet");

    return $project;
}

/* Fonction qui récupère la liste des articles du blog */
function getPosts() : array
{
    $args = array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'title',
        'order'   => 'ASC'
    );

    $posts = get_posts( $args );

    return $posts;
}

/* Récupérer les infos d'un article du blog */
function getPost() : array
{
    $post = [];
    $post["titre"] = get_the_title();
    $post["content"] = the_content();
    
    return $post;
}

