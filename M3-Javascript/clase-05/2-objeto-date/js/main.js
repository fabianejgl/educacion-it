console.log(document.querySelector('title').textContent)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/**
 * Mostrar la fecha actual
 * formato:03/08/2023
 */

// Seleccionamos elementos dentro del DOM
const txt1 = document.getElementById('txt1')
const txt2 = document.getElementById('txt2')
console.log(txt1)

const fecha = new Date()
// console.log(fecha)
console.dir(fecha) //!PUEDO VER SUS FUNCIONES

//Obtener n° de día y mes
let diaMes = fecha.getDate()
console.log(diaMes)

if(diaMes < 10 ) {
    diaMes = '0'+diaMes
}

let mes = fecha.getMonth()+1
console.log(mes)
if(mes<10) {
    mes = '0' + mes
}
//console.log(mes)

let anio = fecha.getFullYear()
console.log(anio)

txt1.innerText = diaMes + '/' + mes + '/' + anio
txt2.innerText = `${diaMes}/${mes}/${anio}`



//----------------------------------------------------------
/**
 * mostrar hora
 * formato: 09:35:41
 */
const txtHora1 = document.querySelector('#txtHora1')
const txtHora2 = document.querySelector('#txtHora2')

function getHora(){
    let hora = new Date()

    let horas=hora.getHours()
    if (horas < 10) {
        horas = '0' + horas
    }

    let minutos = hora.getMinutes()
    if (minutos < 10) {
        minutos = '0' + minutos
    }

    let segundos = hora.getSeconds()
    if (segundos < 10) {
        segundos = '0' + segundos
    }

    txtHora1.innerText = horas + ':' + minutos + ':' + segundos
    txtHora2.innerText = `${horas}:${minutos}:${segundos}`
}

getHora() //Llamado de la función


// ! La función setInterval sirve para actualizar el llamado a una función
// setInterval( getHora ) //RECIBE UNA FUNCIÓN COMO ARGUMENTO