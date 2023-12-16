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

        public function getByNome(string $nome) {
            try {
                $db = Database::getInstace();
                $data = $db->select("*", "funcionarios")->where("nome")->like("$nome")->toArray();
                echo json_encode($data);
            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

        public function checkHasAlreadyCpf(string $cpf) {
            try {
                $handlerCpf = vsprintf("%s%s%s.%s%s%s.%s%s%s-%s%s", str_split($cpf));
                $db = Database::getInstace();
                $data = $db->select("cpf", "funcionarios")->where("cpf = '$handlerCpf'")->toArray();
                if(empty($data)){
                    throw new Exception('Não encontrado');
                }

                echo json_encode($data);
                return header('HTTP/1.1 200 OK');

                
                
            } catch (Exception $e) {
                header('HTTP/1.1 404 Not Found');
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

        public function update(string $id): void {
            try {
                $db = Database::getInstace();
                $data = json_decode(file_get_contents('php://input'), true);
                $cargo = Funcionario::fromMap($db->select("*", "funcionarios")->where("id = $id")->toArray()[0]);
                $data['id'] = $id;
                $db->update($data, "funcionarios", "id = $cargo->id");

            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

        public function delete(int $id): void {
            try {
                $db = Database::getInstace();
                $cargo = Funcionario::fromMap($db->select("*", "funcionarios")->where("id = $id")->toArray()[0]);        
                $db->delete((array) $cargo, "funcionarios", "id = $cargo->id");

            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

    }