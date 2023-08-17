"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const persona_1 = require("./persona");
class Estudiante extends persona_1.Persona {
    constructor(nom, le) {
        super(nom);
        this.legajo = le;
    }
    presentarse() {
        return `${super.presentarse()} y tengo el legajo ${this.legajo}`;
    }
}
exports.Estudiante = Estudiante;
