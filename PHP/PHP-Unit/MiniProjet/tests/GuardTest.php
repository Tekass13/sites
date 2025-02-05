<?php

use PHPUnit\Framework\TestCase;
use MiniProjet\Guard;
use MiniProjet\Post;
use MiniProjet\User;

class GuardTest extends TestCase
{
    public function testGiveAccess(): void
    {
        $post = new Post("Private Post", "Content", "private-post", true);
        $user = new User("John", "Doe", "john.doe@example.com", "Passw0rd!");
        $user->addRole("USER");

        $guard = new Guard();
        $updatedUser = $guard->giveAccess($post, $user);

        $this->assertContains("ADMIN", $updatedUser->getRoles());
    }

    public function testRemoveAccess(): void
    {
        $post = new Post("Private Post", "Content", "private-post", true);
        $user = new User("John", "Doe", "john.doe@example.com", "Passw0rd!");
        $user->addRole("ADMIN");

        $guard = new Guard();
        $updatedUser = $guard->removeAccess($post, $user);

        $this->assertContains("USER", $updatedUser->getRoles());
        $this->assertNotContains("ADMIN", $updatedUser->getRoles());
    }
}