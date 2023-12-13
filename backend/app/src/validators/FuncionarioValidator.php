<?php

namespace App\validators;
use App\models\Cargo;
use Exception;

    class FuncionarioValidator {

        static function validateNome(string $nome): void {
            try {
                if(empty($nome) || $nome == null || !isset($nome) || $nome = "") {
                    throw new Exception("Necessário preencher o nome do funcionário");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static function validateCargo(int $cargo_id): void {
            try {
                if(empty($cargo_id) || $cargo_id == null || !isset($cargo_id) || $cargo_id = "") {
                    throw new Exception("Necessário preencher o cargo do funcionário");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }
        
        static function validateCPF(string $cpf): void {
            try {
                $cpf = preg_replace( '/[^0-9]/is', '', $cpf);

                if (strlen($cpf) != 11) {
                    throw new Exception("CPF não contém 11 dígitos");
                }

                if (preg_match('/(\d)\1{10}/', $cpf)) {
                    throw new Exception("CPF inválido");
                }

                for ($t = 9; $t < 11; $t++) {
                    for ($d = 0, $c = 0; $c < $t; $c++) {
                        $d += $cpf[$c] * (($t + 1) - $c);
                    }
                    $d = ((10 * $d) % 11) % 10;
                    if ($cpf[$c] != $d) {
                        throw new Exception("CPF inválido");
                    }
                }

            } catch (\Throwable $th) {
                throw $th;
            }
        } 
    }