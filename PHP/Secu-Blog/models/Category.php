<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */



class Category {

    private ?int $id = null;
    private array $posts = [];
    public function __construct(private ?string $title = "", private ?string $excerpt = "") {}

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): int
    {
        return $this->id = $id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): string
    {
        return $this->title = $title;
    }

    public function getDescription(): string
    {
        return $this->excerpt;
    }

    public function setDescription(string $excerpt): string
    {
        return $this->excerpt = $excerpt;
    }

    public function getCategories(): array
    {
        return $this->categories;
    }

    public function setCategories(int $category): string
    {
        return $this->categories = $category;
    }

    public function addPost(Post $post): void
    {
        foreach ($this->posts as $existingPost) {
            if ($existingPost === $post) {
                return;
            }
        }
        $this->posts[] = $post;
    }

    public function removePost(Post $post): void
    {
        $this->posts = array_filter(
            $this->posts,
            fn($existingPost) => $existingPost !== $post
        );
    }
}