'use strict'

const fibonacci = () => {
    const penultimateNumber = 350;
    const fibonacciSequence = [0, 1];

    while (true) {
        const newNumber = fibonacciSequence[fibonacciSequence.length - 1]
            + fibonacciSequence[fibonacciSequence.length - 2]

        fibonacciSequence.push(newNumber);

        if (newNumber > penultimateNumber)
            break;
    }
    return fibonacciSequence;
}

const isFibonnaci = num => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
