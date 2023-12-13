<?php

namespace App\core;

use Exception;

require __DIR__ . "/../../../config.php";

class Migration {

    public static function auto(string $fileSQL): void {
        $db = Database::getInstace();
        global $config;
            try {
                $file = file_get_contents("app/migrations/$fileSQL");
                if(!$file) {
                    throw new Exception("Ocorreu um problema na migração ao banco de dados.");
                }
                $migration = str_replace(["CREATE TABLE", "INSERT INTO"], ["CREATE TABLE IF NOT EXISTS", "REPLACE INTO"], $file);
                $db->query($migration);
                
            } catch (Exception $e) {
                echo json_encode([
                    "error" => $e->getMessage()
                ]);
            }
        }
    
}