function isFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (a < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === numero;
}


const numero1 = 28;

if (isFibonacci(numero1)) {
    console.log(`O número ${numero1} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero1} NÃO pertence à sequência de Fibonacci.`);
}