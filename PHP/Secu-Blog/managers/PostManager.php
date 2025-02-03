<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */

class PostManager extends AbstractManager
{
    public function __construct()
    {
        parent::__construct();
    }

    public function findLatest(): array
    {
        $query = $this->db->query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 4');
        $posts = [];

        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $author = $this->findAuthor($row['author']);
            $createdAt = new DateTime($row['created_at']);

            $post = new Post($row['title'], $row['excerpt'], $row['content'], $author, $createdAt);
            $post->setId($row['id']);

            $posts[] = $post;
        }

        return $posts;
    }

    public function findOne(int $id): ?Post
    {
        $query = $this->db->prepare('SELECT * FROM posts WHERE id = :id');
        $query->bindValue(':id', $id, PDO::PARAM_INT);
        $query->execute();

        $data = $query->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            $author = $this->findAuthor($data['author']);
            $createdAt = new DateTime($data['created_at']);

            $post = new Post($data['title'], $data['excerpt'], $data['content'], $author, $createdAt);
            $post->setId($data['id']);

            return $post;
        }

        return null;
    }

    public function findByCategory(int $categoryId): array
    {
        $query = $this->db->prepare(
            'SELECT p.* FROM posts p 
             JOIN post_category pc ON p.id = pc.post_id 
             WHERE pc.category_id = :category_id'
        );
        $query->bindValue(':category_id', $categoryId);
        $query->execute();

        $posts = [];
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $author = $this->findAuthor($row['author']);
            $createdAt = new DateTime($row['created_at']);

            $post = new Post($row['title'], $row['excerpt'], $row['content'], $author, $createdAt);
            $post->setId($row['id']);

            $posts[] = $post;
        }

        return $posts;
    }

    private function findAuthor(int $authorId): User
    {
        $query = $this->db->prepare('SELECT * FROM users WHERE id = :id');
        $parameters = [':id' => $authorId];
        $query->execute($parameters);

        $data = $query->fetch(PDO::FETCH_ASSOC);
        if ($data) {
            $user = new User(
                $data["id"],
                $data["username"],
                $data["email"],
                $data["password"],
                $data["role"],
                $data["created_at"],
            );
            return $user;
        } else {
            return null;
        }
    }
}

