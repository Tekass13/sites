<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */


class Post
{
    private ?int $id = null;
    private array $categories = [];
    public function __construct(private string $title, private string $excerpt, private string $content, private User $author,  private DateTime $createdAt) {}

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): int
    {
        return $this->id = $id;
    }

    public function getTile(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): string
    {
        return $this->title = $title;
    }

    public function getExcerpt(): string
    {
        return $this->excerpt;
    }

    public function setExcerpt(string $excerpt): string
    {
        return $this->excerpt = $excerpt;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    public function getAuthor(): int
    {
        return $this->author;
    }

    public function setAuthor(int $author): int
    {
        return $this->author = $author;
    }

    public function setCreatedAt(DateTime $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    public function getPosts(): array
    {
        return $this->posts;
    }

    public function setPosts(int $post): string
    {
        return $this->posts = $post;
    }

    public function addCategory(Category $category): void
    {
        foreach ($this->categories as $existingCategory) {
            if ($existingCategory === $category) {
                return;
            }
        }
        $this->categories[] = $category;
    }
    
    public function removeCategory(Category $category): void
    {
        $this->categories = array_filter(
            $this->categories,
            fn($existingCategory) => $existingCategory !== $category
        );
    }
}