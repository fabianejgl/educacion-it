console.log(document.querySelector('title').textContent)

// ! FUNCIONES: Las funciones son bloques de código que realizan una tarea específica u pueden ser reutilizadas.

console.log('Bienvenido Gonzalo!')
console.log('Bienvenida Luana')
console.log('Bienvenido Seba')
console.log('Bienvenido Maxi')
console.log('Bienvenido Gabriel')

function darBienvenida() {
    console.log('Bienvenidos a todos')
}

/*Llamar a una función */
darBienvenida() // invocan o llaman a una función

function saludarYfav(nombre, numFav) {
    console.log('Mi nombre es: ' + nombre +'Mi número favorito es el: ' + numFav)
}

saludarYfav('Gonzalo', 7)
saludarYfav('Luana', 21)
saludarYfav('Seba', 9)
saludarYfav('Maxi', 22)
saludarYfav('Gabi', 9)


/***************************************************************/

function cambiarContenido(elementoId, nuevoContenido) {
    const elemento = document.getElementById(elementoId)
    if(elemento) {
        elemento.textContent = nuevoContenido
    }
    console.warn('CAMBIARON EL CONTENIDO')
}

cambiarContenido('parrafo', 'Soy un texto para el parrafo')
cambiarContenido('parrafo', 'Otro Contenido')


//! ---- SCOPE | AMBITO ----*/
// El alcance o visibilidad que va a tener una variable en una determinada sección del código.

//! ---- BLOQUE PRINCIPAL ----
const globalVariable = 'Soy una variable global'
function mostrarGlobalVariable() {
    console.log(globalVariable)
}

mostrarGlobalVariable() // soy una variable global
console.log(globalVariable)

function otroEjemplo() {

    let variableOtroEjemplo = "Soy la var dentro de la función otroEjemplo"

    if ( true ) {
        let variableIF = 'Soy la variable IF'
        console.log(globalVariable)
    }
    console.log(variableIF)
}



// ! CALLBACKS
//? FUnción que se pasa como argumento de otra

function imprimirTexto1(){
    console.log('imprimirTexto1')
}
function imprimirTexto2(){
    console.log('imprimirTexto2')
}

console.log(imprimirTexto1) //?REFERENCIA de una función, va sin "()"
console.log(imprimirTexto2) //?REFERENCIA de una función, va sin "()"

console.warn('----------------------')

function prueba(item, callback) {
    console.log(item)
    console.log(callback)

    if (typeof callback === 'function'){
        callback()
    }else {
        console.error(`Prueba: el callback ${callback} no es una función`)
    }
}

prueba(2, imprimirTexto1)
prueba(10, imprimirTexto2)
prueba(10, ' holis')

console.warn('---------------------------------')

//operacion(2,3,referenciaDeFuncion)
function operacion(a,b,cb) {
    console.log(a, b, cb)
    return cb(a,b)
}

const suma = function(a,b){ return a + b }
const resta = function(a,b){ return a - b }
const mult = function(a,b){ return a * b }
const division = function(a,b){ return a / b }
const resto = function(a,b){ return a % b }

console.log(operacion(2, 5, suma))
console.log(operacion(2, 5, resta))
console.log(operacion(2, 5, mult))
console.log(operacion(2, 5, division))
console.log(operacion(2, 5, resto))
console.log(`La suma es ${operacion(2, 5, suma)}`)
console.log(`La resta es ${operacion(2, 5, resta)}`)
console.log(`La multiplicación es ${operacion(2, 5, mult)}`)
console.log(`La división es ${operacion(2, 5, division)}`)
console.log(`El resto es ${operacion(2, 5, resto)}`)





