import { Motor } from './motor'
import { Rueda } from './rueda'

export class Auto {
    private color: string
    private modelo: string
    private cantPuertas: number
    private marca: string
    public motor: Motor
    public ruedas: Array<Rueda>

    //Método especial (que permite construir la instancia de esta clase)
    //Se ejecuta cuando se hace un new Auto()
    constructor(color: string,modelo: string,cantPuertas: number, marca: string = 'n/a', motor: Motor, ruedas: Array<Rueda>) {
        console.log('Se ejecutó el constructor')

        this.color = color
        this.modelo = modelo
        this.cantPuertas = cantPuertas
        this.marca = marca
        this.motor = motor
        this.ruedas = ruedas
    }


    acelerar() {
        console.log('Voy a ir a 10km/h')
    }

    public getColor() : string { return this.color }
    public setColor(new_color: string) { this.color = new_color }

    public getMotor() { return this.motor }
    public setMotor(new_motor: Motor) { this.motor = new_motor }

    public getRuedas() { return this.ruedas }
    // public setRuedas(new_motor: Motor) { this.motor = new_motor }
}