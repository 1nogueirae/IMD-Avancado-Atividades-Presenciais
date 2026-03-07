# SEMANA 01 - INFOWEB

**Aluno:** Emanuel Lucas Nogueira da Silva.\
**Matrícula:** 20253002434.\
**Turma:** 03

## Banco de dados.

### EXERCÍCIO 1
Um banco de dados (SGBD) é um software que armazena um conjunto de dados inter-relacionados e disponibiliza ferramenta e recursos que permitem sua manipulação (busca, inserção, alteração, deleção, etc). Conceitue e diferencie o que são os bancos de dados relacionais e os bancos de dados orientados a objetos.

```
Os bancos de dados relacionais são do tipo que utilizam álgebra relacional para gerenciamento, já os orientados a objetos utilizam a mesma lógica de funcionamento das linguagens de programação orientadas a objetos. 
```

### EXERCÍCIO 2
Na construção e definição de bancos de dados, é comum a utilização de três níveis de abstração. Conceitue e diferencie cada um deles utilizando suas próprias palavras.

```
Nível de usuário: A abstração no nível de usuário mostra a ele uma camada do sistema personalizada somente ao conteúdo que lhe interessa.

Nível conceitual: Define quais os dados estão armazenados e qual o relacionamento entre eles.

Nível físico: É o nível de hardware da abstração, descreve a maneira física na qual os dados estão armazenados.
```

### EXERCÍCIO 3
Utilizando suas palavras, descreva quais modelos devem ser considerados ao se desenvolver (criar) um novo banco de dados.

```
Modelo Conceitual: É o planejamento inicial do banco de dados. Nele focamos somente no rascunho e descobrir quais informações serão guardadas e como eles se conectarão. É uma etapa de levantamento de requisitos.
Modelo lógico: É uma fase intermediária, que serve para adaptar o modelo conceitual para a linguagem dos SGBDs.
Modelo físico: É a etapa de construção real que implementa o banco de dados no computador.
```

### EXERCÍCIO 4
No processo de construção de bancos de dados, é importante conhecer os conceitos do que são Entidades e Atributos. Apresente, com suas palavras, o que são Entidades e Atributos, diferencie-os e descreva quais são os tipos de atributos existentes.

```
As entidades são os objetos físicos ou conceitos do mundo real que estão armazenados no banco de dados. Os atributos são as características que complementam a definição das entidades. Por exemplo: Num sistema de armazenamento de inventário de uma concessionária, os carros são entidades que possuem atributos como número de portas, cor, ano, modelo, etc... A quantidade de atributos irá depender da necessidade do sistema. Os atributos podem ser:

Simples: São atributos independentes, eles se valem por si. Por exemplo: Nome de alguém.
Compostos: São atributos que podem ser divisíveis em outros menores, Por exemplo: Endereço de moradia, que pode ser quebrado em continente, país, região, estado, cidade, bairro, rua, casa...
Multivalorado: São atributos que possuem mais de um valor, como o e-mail, pois os usuários podem ter um ou mais endereço de e-mail.
Chave: São atributos únicos daquela entidade e que não se repetem entre os seus registros. Por exemplo: CPF, cada pessoa tem um único e intransferível.
```

### EXERCÍCIO 5
É possível representar bancos de dados utilizando o Modelo Entidade-Relacionamento (MER). Conceitue o MER e explique o que são os Relacionamentos e as Cardinalidades.

```
O Modelo Entidade-Relacionamento é um modelo conceitual de representação onde as entidades são organizadas de acordo com o relacionamento que possuem com outras entidades. Neste modelo, é possível representar o sistema em um diagrama onde cada elemento é representado por um ícone gráfico:

Entidade: Retângulo.
Atributo: Elipse.
Relacionamento: Losango que liga entidades.

Os relacionamentos descrevem, propriamente, como as entidades se relacionam entre si. Num sistema de banco de dados de uma sala de aula, podemos ter 2 entidades diferentes: Professor e Aluno. Cada uma dessas entidades possui seus atributos próprios e elas se relacionam entre si. A cardinalidade é o conceito que descreve a quantidade de ocorrência de relacionamento entre as entidades:

Um-para-um: É quando uma entidade A se relaciona somente com uma entidade B e vice-versa. Descrita como 1:1.
Um-para-muitos: É quando uma entidade A se relaciona com várias entidades B, mas a entidade B possui relacionamento com somente uma entidade A. Descrita como 1:N.
Muitos-para-muitos: É quando uma entidade A se relaciona com várias entidades B e vice-versa. Descrita como N:N.

Nesta hipotética sala de aula, o professor tem vários alunos, mas cada aluno tem somente um professor, isto é: A entidade professor ocorre 1:N para com as entidades alunos.

Além disso, tem-se os conceitos de Cardinalidades Mínimas e Máximas. A cardinalidade mínima indica o número mínimo de vezes que uma entidade participa de um relacionamento (podendo ser 0 ou 1). Já a cardinalidade máxima indica o número máximo de ocorrências permitidas nesse relacionamento (por exemplo, 1 ou N).
```

---

## Desenvolvimento Back-End

### ATIVIDADE 01
Faça um breve relato sobre a tecnologia Node.js destacando suas vantagens, diferenciais e características.

```
A tecnologia de Node.js é basicamente o JavaScript rodando por fora dos navegadores. Ela traz a grande vantagem de rodar a linguagem de construção do front-end no back-end, através da execução do motor V8 do Google Chrome de forma independente do navegador, enxugando assim o stack de tecnologias que o desenvolvedor irá utilizar em seus projetos.
```

### ATIVIDADE 02
Escreva um programa em Node.js que leia uma entrada numérica do teclado (valor de x) e imprima o resultado da seguinte função:

𝑦 = 𝑥^2 + 5𝑥 + 100

O programa deve validar se o valor digitado pelo usuário é um valor numérico. Caso não seja, deve ser apresentado uma mensagem de erro.

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