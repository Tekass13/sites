<?php
declare(strict_types=1);

namespace MiniProjet;

use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testValidUserCreation(): void
    {
        $user = new User('John', 'Doe', 'john.doe@example.com', 'securepassword', ['USER']);
        $this->assertSame('John', $user->getFirstName());
        $this->assertSame('Doe', $user->getLastName());
        $this->assertSame('john.doe@example.com', $user->getEmail());
        $this->assertSame('securepassword', $user->getPassword());
        $this->assertSame(['USER'], $user->getRoles());
    }

    public function testAddRole(): void
    {
        $user = new User('John', 'Doe', 'john.doe@example.com', 'securepassword', ['USER']);
        $user->addRole('ADMIN');
        $this->assertSame(['USER', 'ADMIN'], $user->getRoles());
    }

    public function testRemoveRole(): void
    {
        $user = new User('John', 'Doe', 'john.doe@example.com', 'securepassword', ['USER', 'ADMIN']);
        $user->removeRole('USER');
        $this->assertSame(['ADMIN'], $user->getRoles());
    }

    public function testInvalidEmail(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Invalid email format');
        new User('John', 'Doe', 'invalid-email', 'securepassword', ['USER']);
    }

    public function testInvalidPassword(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Password must be at least 8 characters long');
        new User('John', 'Doe', 'john.doe@example.com', 'short', ['USER']);
    }

    public function testInvalidRole(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Invalid role: INVALID_ROLE');
        new User('John', 'Doe', 'john.doe@example.com', 'securepassword', ['INVALID_ROLE']);
    }
}
