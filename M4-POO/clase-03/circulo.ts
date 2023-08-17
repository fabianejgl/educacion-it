export class Circulo {
    private radio: number

    constructor ( r: number){
        this.radio = r
    }

    getRadio(){
        console.log(`Mi radio es ${this.radio}`)
    }

    setRadio(r:number){
        console.log('modificando Radio')
        this.radio = r
    }
}
