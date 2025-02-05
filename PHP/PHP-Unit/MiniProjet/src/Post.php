<?php
declare(strict_types=1);

namespace MiniProjet;

use InvalidArgumentException;

class Post
{
    private const MAX_TITLE_LENGTH = 255;
    private const MIN_CONTENT_LENGTH = 5;

    private string $title;
    private string $content;
    private string $slug;
    private bool $private;

    public function __construct(string $title, string $content, string $slug, bool $private = false)
    {
        $this->updateTitle($title);
        $this->updateContent($content);
        $this->updateSlug($slug);
        $this->private = $private;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function updateTitle(string $title): void
    {
        $this->ensureIsValidTitle($title);
        $this->title = $title;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function updateContent(string $content): void
    {
        $this->ensureIsValidContent($content);
        $this->content = $content;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function updateSlug(string $slug): void
    {
        $this->ensureIsValidSlug($slug);
        $this->slug = $slug;
    }

    public function isPrivate(): bool
    {
        return $this->private;
    }

    public function setPrivate(bool $private): void
    {
        $this->private = $private;
    }

    private function ensureIsValidTitle(string $title): void
    {
        if (empty($title)) {
            throw new InvalidArgumentException('Title cannot be empty');
        }
        if (strlen($title) > self::MAX_TITLE_LENGTH) {
            throw new InvalidArgumentException('Title cannot exceed ' . self::MAX_TITLE_LENGTH . ' characters');
        }
    }

    private function ensureIsValidSlug(string $slug): void
    {
        if (empty($slug)) {
            throw new InvalidArgumentException('Slug cannot be empty');
        }
        if (!preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/i', $slug)) {
            throw new InvalidArgumentException('Slug must be URL safe');
        }
    }

    private function ensureIsValidContent(string $content): void
    {
        if (empty($content)) {
            throw new InvalidArgumentException('Content cannot be empty');
        }
        if (strlen($content) < self::MIN_CONTENT_LENGTH) {
            throw new InvalidArgumentException('Content must be at least ' . self::MIN_CONTENT_LENGTH . ' characters long');
        }
    }

    public function jsonSerialize(): array
    {
        return [
            'title' => $this->title,
            'content' => $this->content,
            'slug' => $this->slug,
            'private' => $this->private,
        ];
    }
}
