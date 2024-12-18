

/** Suma */
const sum = (adding1, adding2) => {
    return new Promise((resolve, reject) => {
        if(adding1 === 0 || adding2 === 0) reject("Innecesary operation")
        
        const result = adding1 + adding2

        if(result < 0) reject("Calculator returns only positive values")
        resolve(result)
    })
}

const subtract = (minuend, subtrahend) => {
    return new Promise((resolve, reject) => {
        if(minuend === 0 || subtrahend === 0) reject("Innecesary operation")
        
        const result = minuend - subtrahend

        if(result < 0) reject("Calculator returns only positive values")
        resolve(result)
    })
}

const multiplication = (multiplicand, multiplier) => {
    return new Promise((resolve, reject) => {        
        const result = multiplicand * multiplier

        if(result < 0) reject("Calculator returns only positive values")
        resolve(result)
    })
}

const divide = (dividend, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) reject("Cannot be divided by 0");

        const result = dividend / divisor;
        resolve(result);
    });
};

const calculations = async () => {
    try {
        const suma = await sum(2, 2);
        const resta = await subtract(10, 9);
        const multiplicacion = await multiplication(10, 2);
        const dividir = await divide(20, 2);
        console.log({suma, resta, multiplicacion, dividir});
    } catch (error) {
        console.log({error});
    }
}

calculations();
