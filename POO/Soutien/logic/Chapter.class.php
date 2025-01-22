<?php

class Chapter {

    private string $title;
    private string $content;
    private ? Chapter $nextChapter = null;

    public function __construct() {}

    public function getTitle() :string {
        return $this->title;
    }

    public function getContent() :string {
        return $this->content;
    }

    public function getChapter() :Chapter {
        return $this->chapter;
    }

    public function setTitle(string $title) :string {
        return $this->title = $title;
    }

    public function setContent(string $content) :string {
        return $this->content = $content;
    }

    public function setChapter(Chapter $chapter) :Chapter {
        return $this->chapter = $chapter;
    }
}