const winston = require("winston");

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [new winston.transports.Console()],
});

function isPrime(number) {
    logger.debug(`isPrime chamada com número: ${number}`);
    const start = Date.now();

    let result;
    if (number === 1) {
        result = true; // 1 é considerado primo
    } else {
        result = true;
        for (let i = 2; i <= number; i++) {
            if (number % i === 0 && i !== number) {
                logger.info(`${number} não é primo — divisível por ${i}`);
                result = false;
                break;
            }
        }
    }

    const elapsed = Date.now() - start;
    logger.info(`isPrime(${number}) executou em ${elapsed}ms`);

    return result;
}

const numbersToCheck = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números primos:");
for (const number of numbersToCheck) {
    if (isPrime(number)) {
        console.log(number);
    }
}
