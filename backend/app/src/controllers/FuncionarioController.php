<?php

namespace App\controllers;
use App\core\Database;
use App\models\Funcionario;
use Exception;

    class FuncionarioController {

        private string $table = "funcionarios";

        public function getAll() {
            try {
                $db = Database::getInstace();
                $data = $db->select("*", $this->table)->toArray();
                echo json_encode($data);
            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

        public function getById(string $id) {
            try {
                $db = Database::getInstace();
                $data = $db->select("*", $this->table)->where("id = $id")->toArray();
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
                $funcionario = Funcionario::fromMap($data);
                $db->insert((array) $funcionario, "funcionarios");
                header('HTTP/1.1 201 Created');

            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }
    }