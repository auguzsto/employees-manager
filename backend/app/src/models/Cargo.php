<?php

namespace App\models;
use App\models\Model;
use App\validators\CargoValidator;

    class Cargo extends Model {
        public string $nome;
        public string $salario;

        static public function fromMap(array $map): Cargo {
            $cargo = new self();
            
            $cargo->setNome($map['nome']);
            $cargo->salario = $map['salario'];

            return $cargo;
        }

        private function setNome(string $nome): void {
            CargoValidator::validateNome($nome);
            $this->nome = $nome;
        } 
    }