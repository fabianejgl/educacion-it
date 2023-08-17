import './css/style.css'

console.log('Estructuras de decision')

// TODO OPERADORES ARITMETICOS

console.warn('\n/*** Operadores aritméticos ***')

let numero1 = 4
let numero2 = 2
let res = 0

//! operador suma (+)
res = numero1 + numero2
console.log(res)
console.log({res})

//! operador resta (-)
res = numero1 - numero2
console.log(res)
console.log({res})

//! operador mult (*)
res = numero1 * numero2
console.log(res)
console.log({res})

//! operador suma (+)
res = numero1 / numero2
console.log(res)
console.log({res})

//! operador modulo (%)
res = numero1 % numero2
console.log(res)
console.log({res})

console.warn('\n/*** Operadores Comparación ***')
/* Devuelven Booleano
   ? Operador de igualdad estricta (==): True si son iguales en valor
   ? Operador de igualdad estricta (!=): True si son distintos en valor

   ? Operador de igualdad estricta (!==): True si son distintos en valor y tipo de dato
   ? Operador de igualdad estricta (===): True si son iguales en valor y tipo de dato

   ? < > <= >= Funcionan como siempre.
*/

console.log('Resultado (===): ' + (2 == '2'))      //true
console.log('Resultado (===): ' + (3 == 3))        //true

console.log('Resultado (===): ' + (2 !== '2'))      //false
console.log('Resultado (===): ' + (3 !== 3))        //false

console.log('Resultado (===): ' + (2 !== '2'))      //true
console.log('Resultado (===): ' + (3 !== 3))        //false

console.log('Resultado (===): ' + (2 === '2'))     //false
console.log('Resultado (===): ' + (3 === 3))       //true

