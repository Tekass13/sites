<?php
/* Je suis le template de détails d'un projet */
$project = getProject();
?>
<!DOCTYPE html>
<html lang="fr">
    <?php require "partials/_head.php"; ?>
    <body>
        <?php require "partials/_header.php"; ?>
        <main>
            <section class="projects-section">
                <h2>Derniers Projets</h2>
                <div class="projects-list">
                    <article class="project-item">
                        <h3><?= ($project["titre"]) ?></h3>
                        <p><?= ($project["description"]) ?></p>
                        <h4>Technologies utilisées</h4>
                        <ul>
                            <?php foreach ($project["technologies"] as $technology) { ?>
                                <li><?= ($technology) ?></li>
                            <?php } ?>
                        </ul>
                    </article>
                </div>
            </section>
        </main>
        <?php require "partials/_footer.php"; ?>
    </body>
</html>

