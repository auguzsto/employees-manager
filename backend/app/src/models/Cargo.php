<?php

namespace App\models;
use App\models\Model;
use App\validators\CargoValidator;

    class Cargo extends Model {
        public string $nome;
        public string $salario;

        static public function fromMap(array $map): Cargo {
            $cargo = new self();
            $cargo->id = isset($map['id']) ? $map['id'] : 0;
            $cargo->setNome($map['nome']);
            $cargo->salario = $map['salario'];
            $cargo->created_at = isset($map['created_at']) ? $map['created_at'] : date('Y-m-d H:i:s');
            $cargo->updated_at = isset($map['updated_at']) ? $map['updated_at'] : null;
            $cargo->deleted_at = isset($map['deleted_at']) ? $map['deleted_at'] : null;

            return $cargo;
        }

        private function setNome(string $nome): void {
            CargoValidator::validateNome($nome);
            $this->nome = $nome;
        } 
    }