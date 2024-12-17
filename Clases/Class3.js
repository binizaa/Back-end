let testArray = [1, 2, 3, 4, 5];

console.log("\n");
/** Tema 1: Utilizando el método map **/
const newArray = testArray.map(x => x * 2); /** Utilizamos una función */
console.log({ newArray });

console.log("\n");
/** Tema 2: Crear una función map propia **/
const myMapFuntion = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = callback(array[i]);
        newArray.push(newValue);
    }
    return newArray;
};

let newOwnArray = myMapFuntion(testArray, x => x * 2);
let newMapArray = testArray.map(x => x * 2);
console.log({ newOwnArray, newMapArray });

console.log("\n");
/** Tema 3: Extender Array.prototype con una función map propia **/
Array.prototype.myMapFuntion = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let newValue = callback(this[i]);
        newArray.push(newValue);
    }
    return newArray;
};

console.log("\n");
/** Tema 4: Callback con operaciones **/
const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const doOperation = (num1, num2, callback) => {
    let result = callback(num1, num2);
    return result;
};

const add = doOperation(2, 2, sum);
const rest = doOperation(10, 5, subtract);
const multiplicat = doOperation(10, 2, multiplication);
const divid = doOperation(10, 2, divide);
const pow = doOperation(2, 2, x => x ** 2); // Callback es el último parámetro

console.log({ add, rest, multiplicat, divid, pow });

console.log("\n");
/** Tema 5: Promesas **/
const dividir = (dividend, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) reject("Cannot be divided by 0");

        const result = dividend / divisor;
        resolve(result);
    });
};

dividir(6, 3)
    .then(result => {
        console.log({ result });
    })
    .catch(error => {
        console.log({ error });
    });

console.log("\n");
/** Synchornism vs. Asynchronism
 * 
 * Synchronism: You have to finish an action for the next one to continue - Blocking.
 * Asynchronism: Work in parallel - Non-blocking.
*/

const asyncFunction = async () => {
    try{
        let result = await divide(6, 2)
        console.log({result})
    }
    catch(error){
        console.log({error})
    }
    finally{
        console.log("We have tried the division")
    }
}

asyncFunction()