"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nom) {
        this.nombre = nom;
        Persona.incrementarCantidad();
    }
    static getCantidad() { return Persona.cantidad; }
    static incrementarCantidad() { return Persona.cantidad++; }
    presentarse() { return `Hola soy ${this.nombre}`; }
}
exports.Persona = Persona;
Persona.cantidad = 0;
