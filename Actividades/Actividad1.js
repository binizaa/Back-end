class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contadorIndividual = 0; // Renombrar para evitar conflicto con el método
    }

    static contadorGlobal = 0;

    getResponsable() {
        return this.nombre;
    }

    incrementar() {
        this.contadorIndividual++; 
        Contador.contadorGlobal++; 
    }

    getCuentaIndividual() {
        return this.contadorIndividual;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

const cont1 = new Contador("Fernando");
const cont2 = new Contador("Sergio");

cont1.incrementar();
cont1.incrementar();
cont1.incrementar();

cont2.incrementar();
cont2.incrementar();

console.log(`El responsable del contador 1 es ${cont1.getResponsable()}`);
console.log(`El responsable del contador 2 es ${cont2.getResponsable()}`);
console.log(`El contador 1 contó hasta ${cont1.getCuentaIndividual()}`);
console.log(`El contador 2 contó hasta ${cont2.getCuentaIndividual()}`);
console.log(`El contador global es de ${cont1.getCuentaGlobal()}`);
