"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const persona_1 = require("./persona");
class Profesor extends persona_1.Persona {
    constructor(nom, ma) {
        super(nom);
        this.materia = ma;
    }
    presentarse() {
        return `${super.presentarse()} y dicto ${this.materia}`;
    }
}
exports.Profesor = Profesor;
