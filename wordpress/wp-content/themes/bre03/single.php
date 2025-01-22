<?php
/* Je suis le template de détails d'un projet */
$post = getPost();
?>
<!DOCTYPE html>
<html lang="fr">
    <?php require "partials/_head.php"; ?>
    <body>
        <?php require "partials/_header.php"; ?>
        <main>
        <section class="articles-section">
                <h2>Derniers Articles</h2>
                <div class="articles-list">
                    <article class="article-item">
                        <h3><?= ($post["titre"]) ?></h3>
                        <p><?= ($post["content"]) ?></p>
                    </article>
                </div>
            </section>
        </main>
        <?php require "partials/_footer.php"; ?>
    </body>
</html>

