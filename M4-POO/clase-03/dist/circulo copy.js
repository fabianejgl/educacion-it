"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    constructor(r) {
        this.radio = r;
    }
    getRadio() {
        console.log(`Mi radio es ${this.radio}`);
    }
    setRadio(r) {
        console.log('modificando Radio');
        this.radio = r;
    }
}
exports.Circulo = Circulo;
