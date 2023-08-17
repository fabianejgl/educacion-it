"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(alt, ancho, lar) {
        this.altura = alt;
        this.ancho = ancho;
        this.largo = lar;
    }
    encender() {
        return "(Arrancando...)";
    }
}
exports.Vehiculo = Vehiculo;
