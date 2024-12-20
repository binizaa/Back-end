const arr = [1, 2, 3, 4, 5]

const arrPotencia = arr.map((num, index) => num ** index)

console.log({arrPotencia})

const nombres = ["Fernando", "Sergio", " Luciana", "Abril", "Dylan"]


if(nombres.includes("Sergio")) console.log("Luciana esta dentro del array")
else console.log("Luciana no esta dentro del array")

/* EC8 */

const person = {
    nombre: "Fernando",
    dni: 354353454,
    edad: 30,
    email:"fer"
}

const propiedadValor = Object.entries(person)
const soloPropiedade = Object.keys(person)
const soloValores = Object.values(person)

console.log({propiedadValor})
console.log({soloPropiedade})
console.log({soloValores})

/* EC8  */

const personPart2 = {
    direccion: "Aqui en casa",
    telefono: 1234
}

const completedPerson = {
    ...person, //spred -> Los convierte en el mismo objeto
    ...personPart2
}

console.log({completedPerson})

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const { a } = obj1;
const { b, ...rest } = obj1; //Muestra todos menos el b

console.log({a})
console.log({rest})

/* EC10 */
 
const arrayAnidado = [1, 2, 3, [4, 5, 6, [7, 8]], 7, [8]]
const arrFlat = arrayAnidado.flat() /* Solo en el primer nivel */
const arrFlat2 = arrayAnidado.flat(2)

console.log({arrFlat})
console.log({arrFlat2})

/* EC11 */ 
//falsey values NaN, 0, undefined, null, false, ""
let value = 0
let valorAsignado = value || "Sin valor"
let valorAsignadoConNullish = value ?? "Sin valor" //Verifica que no sea null ni undefined

console.log({valorAsignado})
console.log({valorAsignadoConNullish})

/** Privacidad de la clase */
class Persona {
    #fullName
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#fullName = `${nombre} ${apellido}`;
    }

    getFullName() {
        return this.#fullName;
    }
}

const persona1 = new Persona("Fernando", "Giraudo");

console.log(persona1.getFullName());
    