-- EXERCÍCIO 1
-- Construir tabela abaixo:
-- convenios (con_codigo, con_nome)
-- pacientes (pac_codigo, pac_nome, pac_nascimento, con_codigo)
-- atendimentos (ate_codigo, ate_data, ate_diagnostico, pac_codigo)

-- INÍCIO DO EXERCÍCIO 1

CREATE DATABASE semana08;
USE semana08;

CREATE TABLE convenios (
    con_codigo INT PRIMARY KEY,
    con_nome VARCHAR(255) NOT NULL
);

CREATE TABLE pacientes (
    pac_codigo INT PRIMARY KEY,
    pac_nome VARCHAR(255) NOT NULL,
    pac_nascimento DATE NOT NULL,
    con_codigo INT,
    FOREIGN KEY (con_codigo) REFERENCES convenios(con_codigo)
);

CREATE TABLE atendimentos (
    ate_codigo INT PRIMARY KEY,
    ate_data DATE NOT NULL,
    ate_diagnostico VARCHAR(255) NOT NULL,
    pac_codigo INT,
    FOREIGN KEY (pac_codigo) REFERENCES pacientes(pac_codigo)
);

-- FIM DO EXERCÍCIO 1

-- INSERINDO DADOS DE TESTE
INSERT INTO convenios (con_codigo, con_nome) VALUES (1, 'Convênio A');
INSERT INTO convenios (con_codigo, con_nome) VALUES (2, 'Convênio B');
INSERT INTO pacientes (pac_codigo, pac_nome, pac_nascimento, con_codigo) VALUES (1, 'Paciente 1', '1990-01-01', 1);
INSERT INTO pacientes (pac_codigo, pac_nome, pac_nascimento, con_codigo) VALUES (2, 'Paciente 2', '1980-01-01', 2);
INSERT INTO pacientes (pac_codigo, pac_nome, pac_nascimento, con_codigo) VALUES (3, 'Paciente 3', '2000-01-01');
INSERT INTO atendimentos (ate_codigo, ate_data, ate_diagnostico, pac_codigo) VALUES (1, '2024-01-01', 'Diagnóstico 1', 1);
INSERT INTO atendimentos (ate_codigo, ate_data, ate_diagnostico, pac_codigo) VALUES (2, '2024-01-02', 'Diagnóstico 2', 2);
INSERT INTO atendimentos (ate_codigo, ate_data, ate_diagnostico, pac_codigo ) VALUES (3, '2024-01-03', 'Diagnóstico 3', );

-- EXERCÍCIO 2
-- A) Consultar nome e data de nascimento do paciente mais jovem.
SELECT pac_nome, pac_nascimento
FROM pacientes
WHERE pac_nascimento = (
    SELECT MAX(pac_nascimento)
    FROM pacientes
);

-- B) Nome e convênio do paciente mais velho.
SELECT pac_nome, con_nome
FROM pacientes
WHERE pac_nascimento = (
    SELECT MIN(pac_nascimento)
    FROM pacientes
)

-- FIM DO EXERCÍCIO 2

-- INÍCIO DO EXERCÍCIO 3

-- A) Cônvenios sem pacientes conveniados.
SELECT con_nome
FROM convenios
WHERE con_codigo NOT IN (
    SELECT con_codigo
    FROM pacientes
);
-- B) Pacientes sem atendimentos no mês de janeiro de qualquer ano.
SELECT pac_nome
FROM pacientes
WHERE pac_codigo NOT IN (
    SELECT pac_codigo
    FROM atendimentos
    WHERE MONTH(ate_data) = 1
);

-- FIM DO EXERCÍCIO 3

-- CRIANDO TABELA EMPREGADOS PARA O EXERCÍCIO 4
CREATE TABLE empregados (
    emp_matricula INT PRIMARY KEY,
    emp_nome VARCHAR(255) NOT NULL,
    emp_depto VARCHAR(255) NOT NULL,
    emp_funcao VARCHAR(255) NOT NULL,
    emp_salario DECIMAL(10, 2) NOT NULL,
    emp_temposervico INT NOT NULL,
    emp_inicioferias DATE NOT NULL,
    emp_filhos INT NOT NULL
);
-- 

-- INÍCIO DO EXERCÍCIO 4

-- A) O nome do empregado, o departamento no qual ele está alocado e a média salarial desse departamento. A listagem deve ser ordenada pelo nome do departamento e, dentro do departamento, pelo nome do empregado

SELECT emp_nome, emp_depto, AVG(emp_salario) AS media_salarial
FROM empregados 
GROUP BY emp_depto, emp_nome
ORDER BY emp_depto, emp_nome;

-- B) O nome do empregado, o seu salário e o nome do departamento no qual ele está alocado cujo salário seja inferior ao valor médio aplicado naquele departamento. A listagem deve ser ordenada pelo nome do departamento e, dentro do departamento, pelo nome do empregado.

SELECT emp_nome, emp_salario, emp_depto
FROM empregados e1
WHERE emp_salario < (
    SELECT AVG(emp_salario)
    FROM empregados e2
    WHERE e1.emp_depto = e2.emp_depto
)
ORDER BY emp_depto, emp_nome;
-- FIM DO EXERCÍCIO 4