"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const vehiculo_1 = require("./vehiculo");
class Moto extends vehiculo_1.Vehiculo {
    constructor(alt, anch, lar, casco) {
        super(alt, anch, lar);
        this.casco = casco;
    }
}
exports.Moto = Moto;
