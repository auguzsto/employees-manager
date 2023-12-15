<?php

namespace App\validators;
use Exception;

    class CargoValidator {
        static public function validateNome(string $nome): void {
            try {
                if(empty($nome) || $nome == null || !isset($nome) || $nome = "") {
                    throw new Exception("Necessário preencher nome do cargo");
                }
            } catch (Exception $e) {
                throw $e;
            }
        }

        static public function validadeSalario(string $salario): void {
            try {
                if(empty($salario) || $salario == null || !isset($salario) || $salario = "") {
                    throw new Exception("Necessário preencher salário");
                }
            } catch (Exception $e) {
                throw $e;
            }
        }
    }