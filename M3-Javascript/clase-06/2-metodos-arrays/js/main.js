console.log(document.querySelector('title').textContent)

// Métodos de los arrays

let arrayColores = ['rojo', 'verde', 'azul', 'violeta']

console.log(arrayColores)
console.log(arrayColores[2])

arrayColores[0] = 'esto no es rojo'
console.log(arrayColores)

arrayColores[0] = 'rojito'
console.log(arrayColores)

arrayColores[6] = 'amarillo' //dejo vacíos el lugar 4 y 5 (emptyx2)

// MÉTODOS DE LOS ARRAYS
console.warn('\n ****Métodos de los arrays****')

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

// ! isArray(): bool dice si es array o no un elem.
// ! push():    agregar elems al final
// ! pop():     elimina último elem
// ! shift():   elimina elems al inicio
// ! unshift(): agrega primer elem
// ! splice():  agrega, elimina, reemplaza, elems en lugares especificos

//? isArray()
let nombre = 'fabi'
let isTeacher = true
console.log(typeof nombre)
console.log(typeof isTeacher)

console.log(Array.isArray(nombre))
console.log(Array.isArray(arrayColores))

if(Array.isArray(arrayColores)){
    //*recorro si es array
    // for (let i = 0; i < arrayColores.length; i++) {
    //     console.log(arrayColores[i])
    // }
}else{
    //*hago otra cosa si no es array
}


//? push() -> agrega al final
let cantElem = arrayColores.push('grey') //RETORNA nueva Cant Elems.
console.log(arrayColores)
console.log({arrayColores})
console.log(arrayColores.length)
console.log(cantElem)

//? pop()  -> elimina ult elem
let elementoEliminado = arrayColores.pop()
console.log(elementoEliminado)
console.log({arrayColores})

//? shift() -> elimina primer elem
elementoEliminado = arrayColores.shift()
console.log(elementoEliminado)
console.log({arrayColores})

//? unshift() -> agrega al principio
cantElem = arrayColores.unshift('magenta')
console.log({elementoEliminado})
console.log({arrayColores})

//? slice()   -> agrega, elimina, reemplaza en x posicion
arrayColores = ['rojo', 'verde', 'azul', 'violeta']
console.log({arrayColores})

//ACA AGREGA 2 EN POSICION 2 SIN ELIMINAR
let eliminados = arrayColores.splice(2,0,'naranja','blanco')
console.log({eliminados})
console.log({arrayColores})

//ACA AGREGA 2 ELIMINANDO 2
eliminados = arrayColores.splice(2,2,'gold','lightblue')
console.log({eliminados})
console.log({arrayColores})

//ACA reemplazo la pos 4 por otro elem
eliminados = arrayColores.splice(4,1,'chocolate')
console.log({eliminados})
console.log({arrayColores})

