import { Persona } from "./persona"

export class Profesor extends Persona {
    
    private materia: string

    constructor(nom: string, ma: string) {
        super(nom)
        this.materia = ma
    }

    public presentarse(): string {
        return `${super.presentarse()} y dicto ${this.materia}`
    }
}
