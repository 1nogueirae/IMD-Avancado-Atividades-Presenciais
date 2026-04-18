
-- PASSO 01: Criar banco e conectar
CREATE DATABASE sistemaestudantil;

-- PASSO 02: Criar tabela CarteirasEstudantis
CREATE TABLE CarteirasEstudantis (
    ce_matricula BIGINT PRIMARY KEY,
    ce_instituicao VARCHAR(100),
    ce_nivelensino VARCHAR(50),
    ce_estudantenome VARCHAR(150),
    ce_datanascimento DATE
);

-- PASSO 03: Inserir carga de testes
INSERT INTO CarteirasEstudantis 
(ce_matricula, ce_instituicao, ce_nivelensino, ce_estudantenome, ce_datanascimento)
VALUES
(20192151084, 'UFRN', 'Superior', 'Maria Curie', '1867-11-07'),
(20182109700, 'IMD', 'Técnico', 'Ada Lovelace', '1815-12-10'),
(20207698054, 'UFERSA', 'Superior', 'Rita Levi-Montalcini', '1909-04-22'),
(20202151097, 'UERN', 'Técnico', 'Rachel Carson', '1907-05-27');

-- PASSO 04: Consultas e operações

-- a) Listar todos os alunos
SELECT * FROM CarteirasEstudantis;

-- b) Listar apenas os alunos do nível técnico
SELECT * 
FROM CarteirasEstudantis
WHERE ce_nivelensino = 'Técnico';

-- c) Listar apenas nome e data de nascimento
SELECT ce_estudantenome, ce_datanascimento
FROM CarteirasEstudantis;

-- d) Atualizar: definir como nível Superior os alunos da UERN
UPDATE CarteirasEstudantis
SET ce_nivelensino = 'Superior'
WHERE ce_instituicao = 'UERN';

-- e) Remover alunos da UFRN que são de nível técnico
DELETE FROM CarteirasEstudantis
WHERE ce_instituicao = 'UFRN'
AND ce_nivelensino = 'Técnico';

-- f) Listar alunos que nasceram antes de 1900
SELECT *
FROM CarteirasEstudantis
WHERE ce_datanascimento < '1900-01-01';