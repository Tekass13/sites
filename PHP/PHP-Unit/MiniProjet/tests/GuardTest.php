<?php
declare(strict_types=1);

namespace MiniProjet;

use PHPUnit\Framework\TestCase;

class GuardTest extends TestCase
{
    public function testAnonymousCannotAccessPrivatePost(): void
    {
        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('Anonymous users cannot access private posts');

        $post = new Post('Private Post', 'Content', 'private-post', true);
        $user = new User('John', 'Doe', 'john.doe@example.com', 'password', ['ANONYMOUS']);

        $guard = new Guard();
        $guard->giveAccess($post, $user);
    }

    public function testUserGetsAdminRoleForPrivatePost(): void
    {
        $post = new Post('Private Post', 'Content', 'private-post', true);
        $user = new User('John', 'Doe', 'john.doe@example.com', 'password', ['USER']);

        $guard = new Guard();
        $user = $guard->giveAccess($post, $user);

        $this->assertTrue($user->hasRole('ADMIN'));
    }

    public function testAnonymousGetsUserRoleForPublicPost(): void
    {
        $post = new Post('Public Post', 'Content', 'public-post', false);
        $user = new User('John', 'Doe', 'john.doe@example.com', 'password', ['ANONYMOUS']);

        $guard = new Guard();
        $user = $guard->giveAccess($post, $user);

        $this->assertTrue($user->hasRole('USER'));
    }

    public function testAdminLosesAdminRoleForPrivatePostRemoval(): void
    {
        $post = new Post('Private Post', 'Content', 'private-post', true);
        $user = new User('John', 'Doe', 'john.doe@example.com', 'password', ['ADMIN']);

        $guard = new Guard();
        $user = $guard->removeAccess($post, $user);

        $this->assertFalse($user->hasRole('ADMIN'));
        $this->assertTrue($user->hasRole('USER'));
    }

    public function testUserBecomesAnonymousForPublicPostRemoval(): void
    {
        $post = new Post('Public Post', 'Content', 'public-post', false);
        $user = new User('John', 'Doe', 'john.doe@example.com', 'password', ['USER']);

        $guard = new Guard();
        $user = $guard->removeAccess($post, $user);

        $this->assertFalse($user->hasRole('USER'));
        $this->assertTrue($user->hasRole('ANONYMOUS'));
    }
}
