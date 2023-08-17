"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor(color, modelo, cantPuertas, marca = 'n/a', motor, ruedas) {
        console.log('Se ejecutó el constructor');
        this.color = color;
        this.modelo = modelo;
        this.cantPuertas = cantPuertas;
        this.marca = marca;
        this.motor = motor;
        this.ruedas = ruedas;
    }
    acelerar() {
        console.log('Voy a ir a 10km/h');
    }
    getColor() { return this.color; }
    setColor(new_color) { this.color = new_color; }
    getMotor() { return this.motor; }
    setMotor(new_motor) { this.motor = new_motor; }
    getRuedas() { return this.ruedas; }
}
exports.Auto = Auto;
