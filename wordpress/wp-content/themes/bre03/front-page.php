<?php
/* Je suis le template de la page d'accueil du site*/
$projects = getProjects();
$posts = getPosts();

$project = getProject();

echo "<pre>";
var_dump($project["technologies"]);
echo "</pre>";

?>
<!DOCTYPE html>
<html lang="fr">
    <?php get_header(); ?>
    <body>
        <main>
            <!-- Section Projets -->
            <section class="projects-section">
                <h2>Derniers Projets</h2>
                <div class="projects-list">
                    <?php
                    // Requête pour les projets
                    $project_query = new WP_Query([
                        'post_type' => 'projet', // Type de contenu personnalisé "projet"
                        'posts_per_page' => 2,  // Limiter à 2 projets
                    ]);

                    if ($project_query->have_posts()) {
                        while ($project_query->have_posts()) {
                            $project_query->the_post(); ?>
                            <article class="project-item">
                                <h3><?php the_title(); ?></h3>
                                <p><?php the_excerpt(); ?></p>
                                <h4>Technologies utilisées</h4>
                                <ul>
                                    <?php
                                    // Récupérer une liste personnalisée de technologies (champ personnalisé ACF ou métadonnées)
                                    $technologies = get_field('technologies'); // Exemple avec ACF
                                    if (!empty($technologies)) {
                                        foreach ($technologies as $tech) { ?>
                                            <li><?php echo esc_html($tech); ?></li>
                                        <?php }
                                    } ?>
                                </ul>
                            </article>
                        <?php }
                        wp_reset_postdata(); // Réinitialiser la requête globale
                    } else {
                        echo '<p>Aucun projet trouvé.</p>';
                    }
                    ?>
                </div>
            </section>

            <!-- Section Articles -->
            <section class="articles-section">
                <h2>Derniers Articles</h2>
                <div class="articles-list">
                    <?php
                    // Requête pour les articles
                    $article_query = new WP_Query([
                        'post_type' => 'post', // Type d'article par défaut
                        'posts_per_page' => 3, // Limiter à 3 articles
                    ]);

                    if ($article_query->have_posts()) {
                        while ($article_query->have_posts()) {
                            $article_query->the_post(); ?>
                            <article class="article-item">
                                <h3><?php the_title(); ?></h3>
                                <p><?php the_excerpt(); ?></p>
                                <a href="<?php the_permalink(); ?>" class="article-link">Lire l'article</a>
                            </article>
                        <?php }
                        wp_reset_postdata(); // Réinitialiser la requête globale
                    } else {
                        echo '<p>Aucun article trouvé.</p>';
                    }
                    ?>
                </div>
            </section>
        </main>
        <?php get_footer(); ?>
    </body>
</html>


