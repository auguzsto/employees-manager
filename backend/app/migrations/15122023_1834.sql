CREATE DATABASE IF NOT EXISTS backend_assim;

CREATE TABLE cargos(
    id BIGINT AUTO_INCREMENT,
    nome TEXT NOT NULL,
    salario TEXT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME, 
    deleted_at DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE funcionarios(
    id BIGINT AUTO_INCREMENT,
    nome TEXT NOT NULL,
    data_nascimento DATE,
    endereco_completo TEXT,
    cpf TEXT NOT NULL UNIQUE,
    email TEXT,
    telefone TEXT,
    cargo_id BIGINT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME, 
    deleted_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (cargo_id) REFERENCES cargos(id)  
);