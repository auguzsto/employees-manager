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
    $router->mount("/api/funcionarios", function() use ($router) {
        $router->get("/", "FuncionarioController@getAll");
        $router->get("/(\d+)", "FuncionarioController@getById");
        $router->get("/n/(\w+)", "FuncionarioController@getByNome");
        $router->post("/", "FuncionarioController@create");
        $router->patch("/{id}", "FuncionarioController@update");
        $router->options("/{id}", "FuncionarioController@delete");
    });
    
    $router->run();