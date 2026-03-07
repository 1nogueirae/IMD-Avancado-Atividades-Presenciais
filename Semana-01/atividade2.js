// ATIVIDADE 02
// Escreva um programa em Node.js que leia uma entrada numérica do teclado (valor de x) e imprima o resultado da seguinte função:

// 𝑦 = 𝑥^2 + 5𝑥 + 100

// O programa deve validar se o valor digitado pelo usuário é um valor numérico. Caso não seja, deve ser apresentado uma mensagem de erro.

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