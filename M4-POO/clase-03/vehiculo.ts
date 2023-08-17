export class Vehiculo {
    private altura: number
    private ancho: number
    private largo: number

    constructor(alt: number, ancho: number, lar:number){
        this.altura = alt
        this.ancho = ancho
        this.largo = lar
    }

    public encender() : string {
        return "(Arrancando...)"
    }
}