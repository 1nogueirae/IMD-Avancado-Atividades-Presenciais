# SEMANA 01 - INFOWEB

**Aluno:** Emanuel Lucas Nogueira da Silva.\
**Matrícula:** 20253002434.\
**Turma:** 03\
**GitHub**: 1nogueirae

## Banco de Dados

### EXERCÍCIO 1

#### Enunciado

> Ao desenvolver um novo banco de dados é comum utilizar o Modelo Relacional pois esse,
apesar de sua simplicidade, é bastante representativo. Defina, com suas palavras, o que é
o Modelo Relacional.

#### Resposta

O Modelo Relacional é a forma de retirarmos do papel aquilo que foi construído no modelo Entidade-Relacionamentos. Diferente da fase conceitual do Banco de Dados, no MR já utliziamos um Sistema Gerenciador de Banco de Dados.

### EXERCÍCIO 2

#### Enunciado

> Defina com suas palavras, no que se refere aos SGBD, os conceitos de tabela, atributos,
domínio e tuplas.

#### Resposta

- **Tabela:**  Representação das Entidades no SGBD.
- **Atributos:** Representação dos atributos das entidades. 
- **Domínio:** Os domínios são os valores possíveis para se atribuir aos atributos.
- **Tuplas:** As tuplas (ou linhas) são onde ficam armazenados de fato os atributos de cada entidade.

### EXERCÍCIO 3

#### Enunciado

> Qual o conceito de chave primária? Qual a importância de sua utilização? Dê exemplos.

#### Resposta

Uma Chave Primária é um tipo de atributo que diferencia definitivamente entidades do mesmo tipo. Ela é muito importante para não ocorrerem duplicatas de identidades, por exemplo:

Dois brasileiros diferentes podem ter o mesmo nome, porém os seus CPFs serão diferentes. O CPF, neste caso, é o atributo chave da entidade Pessoa.

### EXERCÍCIO 4

#### Enunciado

> Qual o conceito de chave estrangeira? Qual sua relação com as chave primária?

#### Resposta

A Chave Estrangeira é o mecanismo que estabelece o relacionamento entre duas tabelas, garantindo a integridade referencial. Ela não serve apenas para multivalorados, mas para conectar qualquer entidade (ex: um Pedido que referencia um Cliente). Sem a FK, você tem tabelas isoladas; com ela, você tem um banco relacional.    

### EXERCÍCIO 5

#### Enunciado

> Utilizando a ferramenta MySQL Workbench, identifique e crie as tabelas de um modelo
relacional (crie atributos adicionais, quando achar necessário).
Você irá modelar as entidades necessárias ao registro de operações que envolvem as
operações bancárias e de utilização de cartões de crédito e débito, considere os seguintes
pontos:
> - Cartões de Crédito ou Débito possuem um número único e uma operadora
(bandeira) como por exemplo Visa/MasterCard/Elo;
> - Para cada operação (saque, compra, deposito ou transferência) realizada deve-se
registrar a data, a hora e valor envolvido na transação;
> - Cada cartão pertence a uma única conta bancária, mas cada conta pode ter vários
cartões de diferentes bandeiras;
> - Cada cliente tem apenas uma única conta no banco;
> - Cada conta é de um único cliente e possui um saldo;

#### Resposta

`Respondido e registrado em Semana-02\ex-5-bd.png e Semana-02\ex-5-bd.mwb`

---

## Desenvolvimento Back-End

### INTRODUÇÃO
Esta atividade tem como objetivo praticar os conhecimentos iniciais na tecnologia Node.js. Ao desenvolver as atividades práticas de laboratório, atente sempre em implementar código de maneira organizada, formatada e estruturada: o chamado código limpo. Mantenha seu código sempre de acordo com as guidelines ditas pelas boas práticas de programação. Peça orientação a seu professor mediador sempre que tiver dúvidas.

### ATIVIDADE 01

#### Enunciado

> Descreva como funciona o Event Loop do Node.js, quais vantagens e desvantagens desta abordagem.

#### Resposta

O Event Loop do Node.js é um gerenciador de tarefas que permite a execução assíncrona em uma única thread. Ele funciona delegando operações pesadas para o sistema operacional ou para um pool de threads secundário, enquanto a thread principal continua livre para processar novas requisições. Quando essas tarefas externas terminam, seus callbacks entram em filas específicas que o loop processa em fases.

Vantagens: Excelente escalabilidade para aplicações, baixo consumo de memória por não criar uma thread para cada conexão e simplicidade ao evitar deadlocks comuns em multi-threading.

Desvantagens: É péssimo para tarefas CPU-bound (processamento de dados pesado ou cálculos complexos), pois qualquer bloqueio na thread principal "congela" todo o servidor, além de dificultar o rastreamento de erros em fluxos assíncronos muito profundos.

### ATIVIDADE 02

#### Enunciado

> Crie um servidor web em Node.js puro (sem uso de nenhuma biblioteca externa) que satisfaça as seguintes exigências:
> - 1. Ao acessar o endereço principal via GET, ex: http://localhost:8080/, deve ser retornado o conteúdo de um arquivo HTML (index.html) lido através da biblioteca fs do Node.js.
> - 2. Caso seja acessado qualquer outro endereço ou qualquer outro método HTTP, deve ser retornado o conteúdo de uma página HTML de erro 404.
> - 3. Os arquivos index.html e 404.html são de livre criação.
> - 4. As leituras aos arquivos devem ser feitas de forma assíncrona

#### Resposta

```javascript
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const filename = (req.method === 'GET' && req.url === '/') ? 'index.html' : '404.html';
    const status = filename === 'index.html' ? 200 : 404;
    
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Erro ao ler arquivo');
        }
        res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });

}).listen(8080);
```