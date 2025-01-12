<?php

function categoryPage(): void
{
    $categoryId = $_GET['category'];

    require "managers/category_manager.php";

    $categoryPosts = getPostsForCategory($categoryId);

    $template = "templates/category.phtml";
    require "templates/layout.phtml";
}
