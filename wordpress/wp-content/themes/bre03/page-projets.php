<?php
/* Je suis le template de la page des projets */
$projects = getProjects();

// echo "<pre>";
// var_dump($projects);
// echo "</pre>";
?>
<!DOCTYPE html>
<html lang="fr">
    <?php require "partials/_head.php"; ?>
    <body>
        <?php require "partials/_header.php"; ?>
        <main>
            <ul>
                <?php foreach ($projects as $project) { ?>  
                    <li>
                        <article>
                            <?= get_the_post_thumbnail($project->ID); ?>
                            <h2><?= $project->post_title ?></h2>
                                <?= $project->post_content ?>
                            <a href="<?= $project->guid ?>"><?= $project->post_excerpt?></a>
                        </article>
                    </li>       
                <?php } ?>
            </ul>  
        </main>
        <?php require "partials/_footer.php"; ?>
    </body>
</html>
