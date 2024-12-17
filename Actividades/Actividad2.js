const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]; 

const todasLaClaves  = objetos.flatMap(obj => Object.keys(obj))
const clavesUnicas = todasLaClaves.filter((clave, index, array) => array.indexOf(clave) === index)

console.log({clavesUnicas})