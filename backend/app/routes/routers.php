<?php

use Bramus\Router\Router;

    $router = new Router();
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');
    header('Access-Control-Max-Age: 86400');

    
    // Index
    $router->get('/', function () {
        echo json_encode([
            "author" => "Matheus Augusto",
            "worker" => "Desenvolver uma API simples para avaliação."
        ]);
    });

    // Namespaces
    $router->setNamespace("\App\controllers");

    // Endpoints cargos
    $router->mount("/api/cargos", function() use ($router) {
        $router->get("/", "CargoController@getAll");
        $router->get("/(\d+)", "CargoController@getById");
        $router->get("/n/(.*)", "CargoController@getByNome");
        $router->post("/", "CargoController@create");
        $router->patch("/{id}", "CargoController@update");
        $router->options("/{id}", "CargoController@delete");
    });

    // Endpoints funcionarios
    $router->mount("/api/funcionarios", function() use ($router) {
        $router->get("/", "FuncionarioController@getAll");
        $router->get("/(\d+)", "FuncionarioController@getById");
        $router->get("/n/(.*)", "FuncionarioController@getByNome");
        $router->get("/cpf/(.*)", "FuncionarioController@checkHasAlreadyCpf");
        $router->post("/", "FuncionarioController@create");
        $router->patch("/{id}", "FuncionarioController@update");
        $router->options("/{id}", "FuncionarioController@delete");
    });

    // Endpoints relatorios
    $router->mount("/api/relatorios", function() use ($router) {
        $router->get("/", "RelatorioController@getNomeTelefoneCargoAll");
        $router->get("/(.*)", "RelatorioController@getNomeTelefoneCargoByNomeCpf");
    });
    
    $router->run();