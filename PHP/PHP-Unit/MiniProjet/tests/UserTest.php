<?php
namespace MiniProjet;

use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testUserCreation(): void
    {
        $user = new User("John", "Doe", "john.doe@example.com", "Passw0rd!");
        $this->assertEquals("John", $user->getFirstName());
        $this->assertEquals("Doe", $user->getLastName());
        $this->assertEquals("john.doe@example.com", $user->getEmail());
        $this->assertContains("ANONYMOUS", $user->getRoles());
    }

    public function testAddRole(): void
    {
        $user = new User("Jane", "Doe", "jane.doe@example.com", "Str0ngP@ss!");
        $roles = $user->addRole("USER");
        $this->assertContains("USER", $roles);
        $this->assertNotContains("ANONYMOUS", $roles);
    }
}