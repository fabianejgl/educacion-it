class Contador {
    static contador: number = 0

    constructor() {
        Contador.contador++
    }

    static obtenerContador(): number {
        return Contador.contador
    }
}


const contador1 = new Contador()
const contador2 = new Contador()
const contador3 = new Contador()
const contador4 = new Contador()
const contador5 = new Contador()

class superContador extends Contador {
    
}