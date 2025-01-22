<?php
    $menuItems = wp_get_nav_menu_items('Menu Principal');
    // var_dump($menuItems);
?>
<header class="header">
    <nav class="nav">
        <ul class="nav-list">
            <?php foreach ($menuItems as $menuItem) { ?>
                <li class="nav-item">
                    <a href="<?= $menuItem->url ?>" class="nav-link"><?= $menuItem->title ?></a>
                </li>
            <?php } ?>
        </ul>
    </nav>
</header>


