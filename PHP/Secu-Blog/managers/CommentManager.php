<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */

class CommentManager extends AbstractManager
{
    public function __construct()
    {
        parent::__construct();
    }

    public function findByPost(int $postId): array
    {
        $query = $this->db->prepare('SELECT * FROM comments WHERE post_id = :post_id');
        $query->bindValue(':post_id', $postId, PDO::PARAM_INT);
        $query->execute();

        $comments = [];
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $comment = new Comment($row['id'], $row['content'], $row['user_id'], $row['post_id']);
            $comments[] = $comment;
        }

        return $comments;
    }

    public function create(Comment $comment): bool
    {
        $query = $this->db->prepare(
            'INSERT INTO comments (content, user_id, post_id) VALUES (:content, :user_id, :post_id)'
        );

        $parameters = [
            ':content' => $comment->getContent(),
            ':user_id' => $comment->getUserId(),
            ':post_id' => $comment->getPostId()
        ];

        return $query->execute($parameters);
    }
}

