import { Vehiculo } from "./vehiculo";

export class Autobus extends Vehiculo {
    private puertas: boolean

    constructor(alt: number, anch:number, lar:number, puert:boolean){
        super(alt, anch, lar)
        this.puertas = puert
    }
}