export class Rueda {
    private presionAire: number

    constructor(presion:number) {
        this.presionAire = presion
    }

    public getPresion() : number {
        return this.presionAire
    }
}