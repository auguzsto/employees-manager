<?php

namespace App\controllers;

use Exception;
use App\models\Cargo;
use App\core\Database;

    class CargoController {

        public function getAll() {
            try {
                $db = Database::getInstace();
                $data = $db->select("*", "cargos")->toArray();
                echo json_encode($data);
            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

        static public function getById(int $id) {
            try {
                $db = Database::getInstace();
                $data = $db->select("*", "cargos")->where("id = $id")->toArray();
                echo json_encode($data);
            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

        public function create(): void {
            try {
                $db = Database::getInstace();
                $data = json_decode(file_get_contents('php://input'), true);
                $cargo = Cargo::fromMap($data);
                $db->insert((array) $cargo, "cargos");
                echo json_encode($data);

            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

    }