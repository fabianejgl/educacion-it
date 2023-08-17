"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autobus = void 0;
const vehiculo_1 = require("./vehiculo");
class Autobus extends vehiculo_1.Vehiculo {
    constructor(alt, anch, lar, puert) {
        super(alt, anch, lar);
        this.puertas = puert;
    }
}
exports.Autobus = Autobus;
