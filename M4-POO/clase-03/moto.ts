import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
    private casco: boolean

    constructor(alt: number, anch:number, lar:number, casco: boolean){
        super(alt, anch, lar)
        this.casco = casco
    }
}