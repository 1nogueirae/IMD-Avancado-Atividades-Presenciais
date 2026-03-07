# SEMANA 01 - INFOWEB

**Aluno:** Emanuel Lucas Nogueira da Silva.\
**Matrícula:** 20253002434.\
**Turma:** 03\
**GitHub**: 1nogueirae

## Banco de Dados

### EXERCÍCIO 1

#### Enunciado

> Um banco de dados (SGBD) é um software que armazena um conjunto de dados inter-relacionados e disponibiliza ferramenta e recursos que permitem sua manipulação (busca, inserção, alteração, deleção, etc). Conceitue e diferencie o que são os bancos de dados relacionais e os bancos de dados orientados a objetos.

#### Resposta

Os bancos de dados relacionais utilizam álgebra relacional para gerenciamento, enquanto os orientados a objetos seguem a mesma lógica das linguagens de programação orientadas a objetos.

### EXERCÍCIO 2

#### Enunciado

> Na construção e definição de bancos de dados, é comum a utilização de três níveis de abstração. Conceitue e diferencie cada um deles utilizando suas próprias palavras.

#### Resposta

- **Nível de usuário:** mostra ao usuário uma camada personalizada apenas com o conteúdo que lhe interessa.
- **Nível conceitual:** define quais dados estão armazenados e qual o relacionamento entre eles.
- **Nível físico:** descreve a forma física de armazenamento dos dados no hardware.

### EXERCÍCIO 3

#### Enunciado

> Utilizando suas palavras, descreva quais modelos devem ser considerados ao se desenvolver (criar) um novo banco de dados.

#### Resposta

- **Modelo conceitual:** planejamento inicial do banco de dados, focado em levantar requisitos e definir quais informações serão guardadas e como se relacionam.
- **Modelo lógico:** fase intermediária que adapta o modelo conceitual para a linguagem dos SGBDs.
- **Modelo físico:** etapa de implementação real do banco de dados no computador.

### EXERCÍCIO 4

#### Enunciado

> No processo de construção de bancos de dados, é importante conhecer os conceitos do que são Entidades e Atributos. Apresente, com suas palavras, o que são Entidades e Atributos, diferencie-os e descreva quais são os tipos de atributos existentes.

#### Resposta

As entidades são objetos físicos ou conceitos do mundo real armazenados no banco de dados. Os atributos são as características que complementam a definição dessas entidades.

Exemplo: em um sistema de inventário de uma concessionária, os carros são entidades e podem ter atributos como número de portas, cor, ano e modelo.

Tipos de atributos:

- **Simples:** independentes, valem por si (ex.: nome).
- **Compostos:** podem ser divididos em partes menores (ex.: endereço).
- **Multivalorados:** possuem mais de um valor possível (ex.: e-mail).
- **Chave:** identificam unicamente cada registro da entidade (ex.: CPF).

### EXERCÍCIO 5

#### Enunciado

> É possível representar bancos de dados utilizando o Modelo Entidade-Relacionamento (MER). Conceitue o MER e explique o que são os Relacionamentos e as Cardinalidades.

#### Resposta

O Modelo Entidade-Relacionamento (MER) é um modelo conceitual no qual as entidades são organizadas de acordo com os relacionamentos que possuem entre si.

No diagrama MER:

- **Entidade:** retângulo.
- **Atributo:** elipse.
- **Relacionamento:** losango que liga entidades.

Os relacionamentos descrevem como as entidades se conectam entre si. Em um sistema de sala de aula, por exemplo, podemos ter as entidades **Professor** e **Aluno**.

A cardinalidade define a quantidade de ocorrências desse relacionamento:

- **1:1 (um-para-um):** uma entidade A se relaciona com apenas uma entidade B, e vice-versa.
- **1:N (um-para-muitos):** uma entidade A se relaciona com várias entidades B.
- **N:N (muitos-para-muitos):** uma entidade A se relaciona com várias entidades B e vice-versa.

Exemplo: em uma sala de aula, um professor pode ter vários alunos, e cada aluno tem apenas um professor (1:N).

Também existem cardinalidades mínima e máxima:

- **Mínima:** número mínimo de participações da entidade no relacionamento (0 ou 1).
- **Máxima:** número máximo de ocorrências permitidas (1 ou N).

---

## Desenvolvimento Back-End

### ATIVIDADE 01

#### Enunciado

> Faça um breve relato sobre a tecnologia Node.js destacando suas vantagens, diferenciais e características.

#### Resposta

Node.js é JavaScript rodando fora do navegador. Uma grande vantagem é permitir o uso da mesma linguagem no front-end e no back-end, por meio da execução do motor V8 de forma independente do navegador, reduzindo o stack de tecnologias usado no desenvolvimento.

### ATIVIDADE 02

#### Enunciado

> Escreva um programa em Node.js que leia uma entrada numérica do teclado (valor de x) e imprima o resultado da seguinte função:
>
> `y = x^2 + 5x + 100`
>
> O programa deve validar se o valor digitado pelo usuário é numérico. Caso não seja, deve ser apresentada uma mensagem de erro.

#### Resposta

```javascript
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function calculate(x) {

    let y = Math.pow(x, 2) + 5 * x + 100

    return y
}

rl.question("Escreva um número X: ", (input) => {
    
    input = input.trim();

    let userInput = Number(input);

    if (isNaN(userInput) || input === "") {
        console.error("O seu input é inválido.")
        rl.close();
        return
    }

    console.log("O resultado é: " + calculate(userInput));

    rl.close();
})
```