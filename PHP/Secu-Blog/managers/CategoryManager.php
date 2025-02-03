<?php
/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */

class CategoryManager extends AbstractManager
{
    public function __construct() {
        parent::__construct();
    }

    public function findAll(): array
    {
        $query = $this->db->query('SELECT * FROM categories');
        $categories = [];

        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $category = new Category($row['title'], $row['excerpt']);
            
            $category->setId($row['id']);
            
            $categories[] = $category;
        }

        return $categories;
    }

    public function findOne(int $id): ?Category
    {
        $query = $this->db->prepare('SELECT * FROM categories WHERE id = :id');
        $query->bindValue(':id', $id);
        $query->execute();

        $data = $query->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            $category = new Category($data['title'], $data['description']);
            
            $category->setId($data['id']);
            
            return $category;
        }

        return null;
    }
}
