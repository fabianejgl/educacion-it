import { Auto } from './auto'
import { Motor } from './motor'
import { Rueda } from './rueda'

const m1 = new Motor(1600)

const ArrayRuedas = [new Rueda(29), new Rueda(32), new Rueda(35), new Rueda(20)]

const a1 = new Auto('Rojo', 'Gol', 4, 'null' , m1, ArrayRuedas)
console.log(a1) // Es un OBJETO a1


const a2 = new Auto('Verde', 'Focus', 2, 'null' , m1, ArrayRuedas)
console.log(a2)

const a3 = new Auto('Azul', 'Ford', 5, 'null' , m1, ArrayRuedas)
console.log(a3)

const a4 = new Auto('Amarillo', '147', 5, 'null' , m1, ArrayRuedas)
console.log(a4)

console.log(a1.motor.getCilindrada())
console.log(a2.motor.getCilindrada())
console.log(a3.ruedas[0].getPresion())
console.log(a3.ruedas[1].getPresion())
console.log(a3.ruedas[2].getPresion())
console.log(a3.ruedas[3].getPresion())
//console.log(a4.ruedas[0].presionAire) //!ES PRIVADA
//console.log(a4.motor.cilindrada) //!ES PRIVADA

//?Debo usar getters
console.log(a1.getColor())
console.log(a2.getColor())
console.log(a3.getColor())
console.log(a4.getColor())

console.log(a1.setColor("Negro"))
console.log(a1.getColor())

console.log(a1.getMotor().getCilindrada()) //!Ahora sí puedo acceder a la CILINDRADA

for (let i = 0; i < a4.getRuedas().length; i++) {
    console.log(a4.getRuedas()[i].getPresion())    
}