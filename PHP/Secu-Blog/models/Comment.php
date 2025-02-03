<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */


class Comment
{
    public function __construct(private int $id, private string $content, private int $user_id, private int $post_id) {

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): void
    { 
        $this->id = $id;
        return;
    }

    public function getcontent(): ?string
    {
        return $this->content;
    }

    public function setcontent(string $content): void
    {
        $this->content = $content;
        return;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(string $user_id): void
    {
        $this->user_id = $user_id;
        return;
    }
    public function getPostId(): ?int
    {
        return $this->post_id;
    }

    public function setPostId(string $post_id): void
    {
        $this->post_id = $post_id;
        return;
    }
}