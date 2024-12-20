function mostrarLista(array){
    if(mostrarLista.length === 0) return "Lista vacía"

    /*
    for(i=0; i< array.length; i++){
        print(array[i]);
    }*/

    array.forEach(element => {
        console.log(element);
    });

    return `La longitud de la lista es ${array.length}`;
}

const list1 = [1,2,3,4,5];
const list2 = [];

const valorList1 = mostrarLista(list1);
const valorList2 = mostrarLista(list2);

console.log({valorList1})
console.log({valorList2})

/* Closures */

function crearContador(){
    let contador = 0
    function sumar(){
        contador++
        console.log(contador);
    }

    function restar(){
        contador--
        console.log(contador);
    }

    return {
        sumar,restar
    }
}

const contador1 = crearContador()
contador1.sumar()
contador1.sumar()
contador1.sumar()
contador1.restar()

/* Clases */

class Person {
    constructor(nombre){
        this.nombre = nombre;
    }

    static especie = "Humano"

    getNombre(){
        return this.nombre;
    }

    saludar() {
        return `Hola ${this.nombre}`
    }
}

const person1 =new Person("Fernando")

const nombrePerona1 = person1.getNombre()

console.log(nombrePerona1)
console.log(person1.saludar())
console.log(Person.especie)