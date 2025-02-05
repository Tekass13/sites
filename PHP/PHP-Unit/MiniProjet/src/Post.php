<?php
namespace MiniProjet;

class Post
{
    private string $title;
    private string $content;
    private string $slug;
    private bool $private;

    public function __construct(string $title, string $content, string $slug, bool $private = false)
    {
        if (empty($title)) {
            throw new \Exception("Title cannot be empty");
        }
        if (empty($content)) {
            throw new \Exception("Content cannot be empty");
        }
        if (empty($slug) || !preg_match('/^[a-zA-Z0-9-_]+$/', $slug)) {
            throw new \Exception("Slug must be URL-safe and not empty");
        }

        $this->title = $title;
        $this->content = $content;
        $this->slug = $slug;
        $this->private = $private;
    }


    // Getters
    public function getTitle(): string
    {
        return $this->title;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function isPrivate(): bool
    {
        return $this->private;
    }

    // Setters
    public function setTitle(string $title): void
    {
        if (empty($title)) {
            throw new \Exception("Title cannot be empty");
        }
        $this->title = $title;
    }

    public function setContent(string $content): void
    {
        if (empty($content)) {
            throw new \Exception("Content cannot be empty");
        }
        $this->content = $content;
    }

    public function setSlug(string $slug): void
    {
        if (empty($slug) || !preg_match('/^[a-zA-Z0-9-]+$/', $slug)) {
            throw new \Exception("Slug must be URL safe and not empty");
        }
        $this->slug = $slug;
    }

    public function setPrivate(bool $private): void
    {
        $this->private = $private;
    }
}
