<?php

namespace App\validators;
use Exception;

    class CargoValidator {
        static public function validateNome(string $nome): void {
            try {
                if(empty($nome) || $nome == null || !isset($nome) || $nome = "") {
                    throw new Exception("Necessário preenche o nome do cargo");
                }
            } catch (Exception $e) {
                throw $e;
            }
        }
    }