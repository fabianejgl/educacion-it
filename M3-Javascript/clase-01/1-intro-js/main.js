import './css/style.css'

console.log('Clase 01 - Introducción JS')

/*-------------------------------------*/
/*Consolas */
/*-------------------------------------*/

console.log('Consola general para mostrar un mensaje en las DevTools')
console.warn('Consola en color amarillo de alerta. En las DevTools')
console.error('Consola en color rojo de error. En las DevTools')

// Comillas simples para los STRINGS

// -------------------------------------
// Comentarios
// -------------------------------------

console.warn('\n/*** Comentarios ***/')


console.warn('\n/*** Variables ***/')
// ? Es un contenedor de información. Que se aloja en memoria.
// ? Para crear una variable voy a utilizar una palabra reservada del lenguaje
// ? (var, let, const) -> var se usa cada vez menos
// ? 


// -------------------------------------
// constructor      | var    | let   | const |
// alcance          | global | local | local |
// redeclarable     |   si   |   no  |  no   |
// redefinible      |   si   |   si  |  no   |
// constructor <nombre> ) 'valor a almacenar'
// console.log(nombre)

// !NO USAR VAR - ejemplo de problema, usar NOMBRE u modificarlo
// nombre = 'Fabian'
// console.log(nombre)
// var nombre = 'Luis'
// console.log(nombre)
// var nombre = 'Valentina'
// console.log(nombre)

console.warn('\n/***CONSTRUCTORES (let)***/')

// TODO ejemplo let
let nombre = 'Fabi' //declaro variable
console.log(nombre)
//! let nombre = 'Maxi'   no se puede redeclarar la variable

let apellido = 'Gomez Laguna'
console.log(apellido)

nombre = 'Luis' // ?redefinir el valor almacenado está permitido
console.log(nombre)

/*
    !PRIMITIVOS
    * Number
    * String
    * Boolean
    * Undefined: se asigna cuando la variable sin definir se le asigna un valor
 */

//! Tipo de dato entero
console.warn('\n/***ENTEROS***/')
let numero
console.log(numero)
numero = 22
console.log(numero)
console.log(typeof numero)


//! Tipo de dato Boolean (T o F)
console.warn('\n/***BOOLEAN***/')
let hoyLlueve = false
console.log(hoyLlueve)
console.log(typeof hoyLlueve)
hoyLlueve = true                //redefino valor
console.log(hoyLlueve)

console.warn('\n/***JS se lo conoce como un lenguaje debilmente tipado (tipado dinámico)***/')
//Quiere decir que JS me permite almacenar en las variables cualquier tipo de dato. Si por ejemplo mi variable es de tipo STRING y le asigno un nombre no tira error.

let nombreApellido = 'FABIAN GOMEZ'
console.log(nombreApellido)
console.log(typeof nombreApellido)
nombreApellido = 2
console.log(nombreApellido)
console.log(typeof nombreApellido)
// En resumen podemos decir que JS no me obliga a definir un tipo de datos cuando creo una variable. Eso lo convierte en un lenguaje debilmente tipado o tipado dinámico

console.warn('\n/***CONSTRUCTORES (const) ***/')
// Constantes, es un contenedor que no se va a poder cambiar
let calle
const PI = 3.141559
//! PI = 222        NO SE PUEDE
console.log(PI)
console.log(typeof PI)

// HTTPS://EN.WIKIPEDIA.ORG/WIKI/Super_PI

// -------------------------------------
// CONCATENACIÓN
// -------------------------------------

console.warn('\n/***CONCATENACIÓN ***/')

let primerNombre = "Fabs"
let segundoNombre = "Ed"
// !JS es CASE sensitive
let apellido1 = "gomez"
let Apellido = "gomez"
let APellido = "gomez"
console.log(primerNombre + " " + segundoNombre + " " + apellido)
console.log(`${primerNombre} ${segundoNombre} ${apellido}`)

//! **************JS es un lenguaje debilmente tipado. Tipado dinámico ********************
let nombreMascota = 'Fido'
console.log(nombreMascota)
console.log('El tipo de dato de nombre es: ' + typeof nombreMascota)

nombreMascota = 12
console.log(nombreMascota)
console.log(`El tipo de dato de nombreMascota es: ${typeof nombreMascota}`)

nombreMascota = true
console.log(nombreMascota)
console.log(`El tipo de dato de nombreMascota es: ${typeof nombreMascota}`)

/**
 * 
 */

// !ARRAY -> Estr. de datos indexada (ienen índice).

let arrayColores = ['rojo', 'verde', 'azul', 'amarillo']
console.log(arrayColores)
console.log(typeof arrayColores)

console.log(arrayColores[0]) //rojo
console.log(arrayColores[2]) //azul
console.log(arrayColores.length)
arrayColores[2] = 'azulino'
console.log(arrayColores[2]) //azulino

console.log(arrayColores)

//                 0        1       2        3
arrayColores = ['rojo', 'verde', 'azul', 'amarillo']
arrayColores[4] = 'rosa'
arrayColores[5] = 'violeta'
console.log(arrayColores)


// !OBJETO
let nombreMaxi = 'Maxi'
let apellidoMaxi = 'Principe'
let alturaMaxi = 2.0
let colorOjosMaxi = 'Avellaneda'

let nombreTadeo = 'Tadeo'
let apellidoTadeo = 'Abru'
let alturaTadeo = 1.9
let colorOjosTadeo = 'Quilmes'

console.warn('\n/*** Objeto literal ***/')
// ! OBJETO LITERAL
let valentina = {nombre: 'Valentina'}

let maxi = {
    nombre: 'Maxi',
    apellido: 'Principe',
    altura: 2.0,
    colorOjos: 'Avellaneda',
    profe: true
}

let tadeo = {
    nombre: 'Tadeo',
    apellido: 'Abru',
    altura: 1.9,
    colorOjos: 'Quilmes',
    profe: false
}

console.log(valentina)
console.log(tadeo)
console.log(maxi)

//Notación punto
console.log(valentina.altura)
console.log(tadeo.nombre)
console.log(maxi.nombre)

//Notación corchete
console.log(valentina['nombre'])
console.log(tadeo['nombre'])
console.log(maxi['nombre'])


console.log(typeof maxi)
console.log(typeof tadeo)

// !OBJETOS
/*
  BOM => Browser Object Model (window)
    *alert()
    *prompt()
    *confirm()
    *console.log()

 * DOM => Document Object Model
    *getElementByID('id')               -> 1° elem con el ID (osea el único)
    *getElementByClassName('class')     -> lista de elems de la clase (ej: texto-rojo)
    *getElementByTagName('tag')         -> lista de elems de la etiqueta
    *querySelector('Selector')          -> 1° elem que coincida con el selector cuya sintaxis es similar a css. (ej ['.texto-rojo'])
    *querySelectorAll('Selector')       -> lista de elem que coincidan con el selector cuya sintaxis es similar a css. (ej ['.texto-rojo'])
 */

window.console.log('Hola mundo')
console.log('Hola mundo')

console.warn('\n/*** - ***')