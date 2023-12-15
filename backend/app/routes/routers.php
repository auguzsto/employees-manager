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
    $router->mount("/api/cargos", function() use ($router) {
        $router->get("/", "CargoController@getAll");
        $router->get("/(\d+)", "CargoController@getById");
        $router->get("/n/(\w+)", "CargoController@getByNome");
        $router->post("/", "CargoController@create");
        $router->patch("/{id}", "CargoController@update");
        $router->options("/{id}", "CargoController@delete");
    });

    // Endpoints funcionarios
    $router->get("/api/funcionarios", "FuncionarioController@getAll");
    $router->get("/api/funcionarios/{id}", "FuncionarioController@getById");
    $router->post("/api/funcionarios", "FuncionarioController@create");
    $router->patch("/api/funcionarios/{id}", "FuncionarioController@update");
    $router->options("/api/funcionarios/{id}", "FuncionarioController@delete");
    
    $router->run();