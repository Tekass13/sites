<?php

require_once "Character.class.php";
require_once "Chapter.class.php";

class Story {

    private array $characters = [];
    private array $chapters = [];

    public function __construct() {}

    public function getCharacters() : array {
        return $this->characters;
    }

    public function setCharacters(array $characters) : void {
        $this->characters = $characters;
    }

    public function getChapters() : array {
        return $this->chapters;
    }

    public function setChapters(array $chapters) : void {
        $this->chapters = $chapters;
    }

    public function addChapter(Chapter $chapter) : void {
        $this->chapters[] = $chapter;
    }

    public function removeChapter(Chapter $chapter) : void {
        $this->chapters = array_filter(
            $this->chapters, 
            fn($existingChapter) => $existingChapter !== $chapter
        );
    }

    public function addCharacter(Character $character) : void {
        $this->characters[] = $character;
    }

    public function removeCharacter(Character $character) : void {
        $this->characters = array_filter(
            $this->characters,
            function($existingCharacter) {
                return $existingCharacter !== $character;
            }
        );
    }
}
