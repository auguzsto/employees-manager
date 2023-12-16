<?php
namespace App\controllers;
use PDO;
use Exception;
use App\core\Database;

    class RelatorioController {

        public function getNomeTelefoneCargoAll() {
            try {
                $db = Database::getInstace();
                $data = $db->query("select f.id as funcionario_id, c.id as cargo_id, f.nome AS nome_funcionario, f.telefone , c.nome AS nome_cargo, c.salario FROM cargos c, funcionarios f GROUP BY f.nome;")->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }

        public function getNomeTelefoneCargoByNomeCpf(string $params) {
            try {
                $db = Database::getInstace();
                $data = $db->query("select f.id as funcionario_id, c.id as cargo_id, f.nome AS nome_funcionario, f.telefone , c.nome AS nome_cargo, c.salario FROM cargos c, funcionarios f where f.nome like '%$params%' or c.nome like '%$params%' GROUP BY f.nome;")->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
            } catch (Exception $e) {
                header('HTTP/1.1 400 Bad Request');
                echo json_encode(["error"=> $e->getMessage()]);
                throw $e;
            }
        }
    }