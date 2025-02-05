<?php

use PHPUnit\Framework\TestCase;
use MiniProjet\Post;

class PostTest extends TestCase
{
    public function testInvalidPostTitle()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage("Title cannot be empty");

        new Post("", "Valid content", "valid-slug");
    }

    public function testInvalidPostContent()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage("Content cannot be empty");

        new Post("Valid title", "", "valid-slug");
    }

    public function testInvalidPostSlug()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage("Slug must be URL-safe and not empty");

        new Post("Valid title", "Valid content", "invalid slug!");
    }
}
