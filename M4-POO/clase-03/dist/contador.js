"use strict";
class Contador {
    constructor() {
        Contador.contador++;
    }
    static obtenerContador() {
        return Contador.contador;
    }
}
Contador.contador = 0;
const contador1 = new Contador();
const contador2 = new Contador();
const contador3 = new Contador();
const contador4 = new Contador();
const contador5 = new Contador();
class superContador extends Contador {
}
