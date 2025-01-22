<?php
/* Je suis le template de la page d'accueil du blog*/

$posts = getPosts();

// echo "<pre>";
// var_dump($posts);
// echo "</pre>";
?>
<!DOCTYPE html>
<html lang="fr">
    <?php require "partials/_head.php"; ?>
    <body>
        <?php require "partials/_header.php"; ?>
        <main>
            <ul>
                <?php foreach ($posts as $post) { ?>  
                    <li>
                        <article>
                            <?= get_the_post_thumbnail($post->ID); ?>
                            <h2><?= $post->post_title ?></h2>
                                <?= $post->post_content ?>
                            <a href="<?= $post->guid ?>"><?= $post->post_excerpt?></a>
                        </article>
                    </li>       
                <?php } ?>
            </ul>  
        </main>
        <?php require "partials/_footer.php"; ?>
    </body>
</html>
