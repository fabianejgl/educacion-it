console.log("Hola mundo desde Typescript!")

let nombre: string = "Maxi"
let numero: number = 22
let booleano: boolean = true
let alumno: string = "Valentina"

class Auto {

    // Defino las propiedades/atributos (Son las caracteristicas de los autos)
    marca: string
    modelo: string
    cantidadRuedas: number
    cantidadPuertas: number

    // Siempre que se cree un objeto a partir de esta clase
    constructor(marca: string, modelo: string, cantidadRuedas: number, cantidadPuertas: number) {
        console.log('Se creó un auto!')
        this.marca = marca
        this.modelo = modelo
        this.cantidadRuedas = cantidadRuedas
        this.cantidadPuertas = cantidadPuertas
    }
}



// método constructor() se ejecuta. ¿Cuándo? Cuando creo una instancia (objeto) a partir de la clase
class Estudiante {
    nombre: string // Defino el atributo y tipo de dato del atributo
    edad: number

    constructor(name: string, age: number) {
        this.nombre = name
        this.edad = age
        console.log('Se creo la instancia Estudiante (El objeto)')
        console.log('this --->', this) // el objeto(instancia) hace referencia a si 
    }
}

const e1 = new Estudiante('Sebastian', 22) // Siempre que haga un new se va a ejecutar el constructor
const e2 = new Estudiante('Adrian', 25)
const e3 = new Estudiante('Alexander', 19)
const e4 = new Estudiante('Gonzalo', 23)
console.log('---------------------------------')
console.log(e1) // Sebastian
console.log(e2) // Adrian
console.log(e3) // Alexander
console.log(e4) // Gonzalo
console.log('---------------------------------')
const e5 = new Estudiante('Leonardo', 28)
console.log('---------------------------------')
console.log(e5)


console.log('---------------------------------')
console.log('Objetos literales')
const joaquin = {
    nombre: 'Joaquin',
    edad: 22,
}
console.log(joaquin)
const tadeo = {
    nombre: 'Joaquin',
    edad: 19
}
console.log(joaquin)
const jeremias = {
    nombre: 'Jeremias',
    edad: 21
}
console.log(jeremias)

console.log('------------------------------------------')




class Pelota {
    /* Atributos / Propiedades */
    color: string
    isRodar: boolean = false

    /* Método especial */
    constructor(color: string) {
        console.log('Se creo una pelota')
        this.color = color

        this.informacion()
    }
    
    /* Método */
    informacion() {
        console.log('Soy una pelota... mi color es: ', this.color)
    }

    rebotar() {
        console.log('Empiezo a rebotar, soy de color:', this.color) 
    }

    cambiarEstado() {
        this.isRodar = !this.isRodar
    }
}

const p1 = new Pelota('Verde')
const p2 = new Pelota('Roja')
const p3 = new Pelota('Amarilla')

p1.rebotar()
p2.rebotar()
p3.informacion()
console.log(p1.isRodar) // false
p1.cambiarEstado()
console.log(p1.isRodar) // true
p1.cambiarEstado()
console.log(p1.isRodar) // false




