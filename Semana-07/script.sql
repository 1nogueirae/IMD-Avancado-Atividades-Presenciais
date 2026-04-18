-- CREATE DATABASE sistemaestudantil;
-- USE sistemaestudantil;

-- Exercício 1: Criar as tabelas

CREATE TABLE departamentos (
    Dep_Codigo INT(11) PRIMARY KEY,
    Dep_Nome VARCHAR(45) NOT NULL
);

CREATE TABLE professores (
    Prof_Codigo INT(11) PRIMARY KEY,
    Prof_Nome VARCHAR(45) NOT NULL,
    Prof_Endereco VARCHAR(45) NOT NULL,
    Dep_Codigo INT(11) NOT NULL,
    FOREIGN KEY (Dep_Codigo) REFERENCES departamentos(Dep_Codigo)
);

CREATE TABLE turmas (
    Tur_Codigo INT(11) PRIMARY KEY,
    Tur_Nome VARCHAR(100) NOT NULL,
    Prof_Codigo INT(11) NOT NULL,
    FOREIGN KEY (Prof_Codigo) REFERENCES professores(Prof_Codigo)
);

CREATE TABLE alunos (
    Alu_Codigo INT(11) PRIMARY KEY,
    Alu_Nome VARCHAR(45) NOT NULL,
    Alu_Endereco VARCHAR(45) NOT NULL
);

CREATE TABLE alunos_turmas (
    Semestre VARCHAR(6) NOT NULL,
    Alu_Codigo INT(11) NOT NULL,
    Tur_Codigo INT(11) NOT NULL,
    PRIMARY KEY (Semestre, Alu_Codigo, Tur_Codigo),
    FOREIGN KEY (Alu_Codigo) REFERENCES alunos(Alu_Codigo),
    FOREIGN KEY (Tur_Codigo) REFERENCES turmas(Tur_Codigo)
);

-- Fim do exercício 1

-- Exercício 2: Alterações

-- A) Alterar coluna Alu_Codigo para que permita a inserção de códigos com letras e números.

-- Remover a FK em alunos_turmas que depende de Alu_Codigo
ALTER TABLE alunos_turmas DROP FOREIGN KEY alunos_turmas_ibfk_1;

-- Modificar a coluna em alunos
ALTER TABLE alunos MODIFY Alu_Codigo VARCHAR(11);

-- Modificar a coluna FK em alunos_turmas para o mesmo tipo
ALTER TABLE alunos_turmas MODIFY Alu_Codigo VARCHAR(11) NOT NULL;

-- Recriar a FK
ALTER TABLE alunos_turmas ADD FOREIGN KEY (Alu_Codigo) REFERENCES alunos(Alu_Codigo);

-- visualizar a tabela alunos para verificar a alteração

SELECT * FROM alunos;

-- B) Inserir tabela enderecos com os dados "Estado, CIdade, Bairro, Nome da rua, Nº da casa e complemento". Deve ter chave estrangeira referenciado a tabela alunos.

CREATE TABLE enderecos (
    End_Codigo INT(11) PRIMARY KEY AUTO_INCREMENT,
    End_Estado VARCHAR(45) NOT NULL,
    End_Cidade VARCHAR(45) NOT NULL,
    End_Bairro VARCHAR(45) NOT NULL,
    End_Rua VARCHAR(100) NOT NULL,
    End_Numero VARCHAR(10) NOT NULL,
    End_Complemento VARCHAR(100),
    Alu_Codigo VARCHAR(11) NOT NULL,
    FOREIGN KEY (Alu_Codigo) REFERENCES alunos(Alu_Codigo)
);

-- visualizar a tabela enderecos para verificar a alteração

SELECT * FROM enderecos;

-- C) Remover coluna Alu_Endereco da tabela alunos.

ALTER TABLE alunos DROP COLUMN Alu_Endereco;

-- visualizar a tabela alunos para verificar a alteração

SELECT * FROM alunos;

-- D) Alterar Alu_Nome em alunos para armazenar 200 caracteres.

ALTER TABLE alunos MODIFY Alu_Nome VARCHAR(200) NOT NULL;

-- visualizar a tabela alunos para verificar a alteração

SELECT * FROM alunos;

-- E) Após o campo nome, adicionar coluna email nas tabelas alunos, professores e departamentos.

ALTER TABLE alunos ADD COLUMN Alu_Email VARCHAR(100) AFTER Alu_Nome;
ALTER TABLE professores ADD COLUMN Prof_Email VARCHAR(100) AFTER Prof_Nome;
ALTER TABLE departamentos ADD COLUMN Dep_Email VARCHAR(100) AFTER Dep_Nome;

-- visualizar as tabelas alunos, professores e departamentos para verificar a alteração

SELECT * FROM alunos;
SELECT * FROM professores;
SELECT * FROM departamentos;

-- F) Adicionar coluna Data_contratacao (DATE) em professores com valor inicial igual a 01/01/2026

ALTER TABLE professores ADD COLUMN Data_contratacao DATE DEFAULT '2026-01-01';

-- visualizar a tabela professores para verificar a alteração

SELECT * FROM professores;


