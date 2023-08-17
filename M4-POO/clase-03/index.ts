// console.log()
import { Circulo } from "./circulo"
import { Vehiculo } from "./vehiculo"
import { Moto } from "./moto"
import { Autobus } from "./autobus"
import { Persona } from "./persona"
import { Estudiante } from "./estudiante"
import { Profesor } from "./profesor"

const r1 = new Circulo(20)
r1.getRadio()
console.log(r1)
r1.setRadio(2)
console.log(r1)

//**************************/

const ve = new Vehiculo(20,30,10)
console.log(ve)

const moto1 = new Moto(10,4,4,true)
console.log(moto1)

const autobus1 = new Autobus(10,4,4,true)
console.log(autobus1)


console.log(ve.encender())
console.log(moto1.encender())
console.log(autobus1.encender())

console.log(moto1)

//*******************************PERSONA - PROFE - ESTUDIANTE**********************************************/

console.log(Persona.getCantidad()) //! 0

const per1 = new Persona('Fabian')
const est1 = new Estudiante('Pablo', 2345)
const prof1 = new Profesor('Roberto', 'Matematica')

console.log(est1)
console.log(prof1)
console.log(est1.presentarse)
console.log(prof1.presentarse)
console.log(Persona.getCantidad()) //! 3
