export class Motor {

    private cilindrada: number

    constructor(cilin:number){
        this.cilindrada = cilin
    }

    public getCilindrada(): number {
        return this.cilindrada
    }
}