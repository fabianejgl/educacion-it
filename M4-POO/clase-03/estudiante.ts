import { Persona } from "./persona"

export class Estudiante extends Persona {
    legajo: number

    constructor(nom:string, le: number) {
        super(nom)
        this.legajo = le
    }

    presentarse(): string {
        return `${super.presentarse()} y tengo el legajo ${this.legajo}`
    }
}