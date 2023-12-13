<?php

namespace App\models;

use App\controllers\CargoController;
use App\models\Model;
use App\validators\FuncionarioValidator;

    class Funcionario extends Model {
        
        public string $nome;
        public string|null $data_nascimento;
        public string|null $endereco_completo;
        public string $cpf;
        public string|null $email;
        public string|null $telefone;
        public int $cargo_id;

        static public function fromMap(array $map): Funcionario {
            $funcionario = new self();

            $funcionario->setNome($map['nome']);
            $funcionario->data_nascimento = isset($map['data_nascimento']) ? $map['data_nascimento'] : null;
            $funcionario->endereco_completo = isset( $map['endereco_completo']) ? $map['endereco_completo'] : null;
            $funcionario->email = isset( $map['email']) ? $map['email'] : null;
            $funcionario->telefone = isset( $map['telefone']) ? $map['telefone'] : null;
            $funcionario->setCpf($map['cpf']);
            $funcionario->setCargo($map['cargo_id']);

            return $funcionario;
        }

        public function setCpf(string $cpf): void {
            try {
               FuncionarioValidator::validateCPF($cpf);
               $this->cpf = $cpf;
               
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function setNome(string $nome): void {
            try {
               FuncionarioValidator::validateNome($nome);
               $this->nome = $nome;
               
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function setCargo(int $cargo_id): void {
            try {
               FuncionarioValidator::validateCargo($cargo_id);
               $this->cargo_id = $cargo_id;
               
            } catch (\Throwable $th) {
                throw $th;
            }
        }

    }