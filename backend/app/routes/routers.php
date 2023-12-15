<?php

use Bramus\Router\Router;

    $router = new Router();
    header('Content-Type: application/json');
    
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
    $router->get("/api/cargos", "CargoController@getAll");
    $router->get("/api/cargos/{id}", "CargoController@getById");
    $router->post("/api/cargos", "CargoController@create");
    $router->patch("/api/cargos/{id}", "CargoController@update");
    $router->delete("/api/cargos/{id}", "CargoController@delete");

    // Endpoints funcionarios
    $router->get("/api/funcionarios", "FuncionarioController@getAll");
    $router->get("/api/funcionarios/{id}", "FuncionarioController@getById");
    $router->post("/api/funcionarios", "FuncionarioController@create");
    $router->patch("/api/funcionarios/{id}", "FuncionarioController@update");
    $router->delete("/api/funcionarios/{id}", "FuncionarioController@delete");
    
    $router->run();