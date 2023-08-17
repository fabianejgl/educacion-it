export class Persona {
    private nombre : string
    static cantidad: number = 0

    constructor(nom: string){
        this.nombre = nom
        Persona.incrementarCantidad()
    }
    public static getCantidad(): number { return Persona.cantidad }
    private static incrementarCantidad(){ return Persona.cantidad++ }

    presentarse(){  return `Hola soy ${this.nombre}`}
}