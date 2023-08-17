console.log(document.querySelector('title').textContent)

// dado un puntaje obtenido por un alumno en exame (número), escribir un rpgrama que muestre la calificación correspondiente usando la estructura if-else. Teniendo en cunetra la tabla calificaciones siguiente
/*
    * 1-3  -> desaprobado
    * 3-6  -> bien
    * 7-8  -> muy bien
    * 9-10 -> excelente
*/

/*
!Ejemplo comentado de IF
let nombreAlumno = prompt('Ingrese nombre alumno')
let puntajeString = prompt('Ingrese un dato')
let puntaje = Number(puntajeString)
let calificacion = ''

if(puntaje <= 3) {
    calificacion = 'desaprobado'
}else if(puntaje <= 6) {
    calificacion = 'bien'
}else if(puntaje <= 8) {
    calificacion = 'muy bien'
}else if(puntaje <= 10) {
    calificacion = 'excelente'
}else{
    calificacion = 'fuera de rango'
}

console.log('-------------------')
console.log('Imprimiendo resultado')
console.log('-------------------')
console.log(`El alumno ${nombreAlumno} sacó ${puntaje}, está ${calificacion}`)
*/


// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// Escribir un programa que solicite al usuario un número que represente un mes del año 1-12 y determine la cantidad de días que tiene ese mnes. Usando una estr de control SWITCH mostrasr la cant de días que tiene ese mes. Si se ingresa un n° fuera de rango, mostrar el mensaje mes inválido

// !Opción Fabii
// debugger
// while(true){
//     let numMesString = prompt('Ingrese número del mes a consultar');
//     // let num = Number(numMesString);
//     let num = parseInt(numMesString);
//     switch (numMesString) {
//         case "1":
//         case "3":
//         case "5": 
//         case "7":
//         case "8":
//         case "10":
//         case "12":
//             console.log('El mes seleccionado tiene 31 días')
//             break;

//         case "2":
//             console.log('El mes seleccionado tiene 28 días')
//             break;

//         case "4":
//         case "6":
//         case "9": 
//         case "11":
//             console.log('El mes seleccionado tiene 30 días')
//             break

//         default:
//             console.log('Opción incorrecta, debe ser <= 12')
//             break;
//     }
// }

// !Opción profe REVISARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
let numMesString = prompt('Ingrese número del mes a consultar');
// let num = Number(numMesString);
let num = parseInt(numMesString);
let cantDias
switch (numMesString) {
    case 1:
    case 3:
    case 5: 
    case 7:
    case 8:
    case 10:
    case 12:
        mes = meses[num-1]
        cantDias = 31;
        break;

    case 2:
        mes = meses[num-1]
        cantDias = 28;

    case 4:
    case 6:
    case 9: 
    case 11:
        mes = meses[num-1]
        cantDias = 30;
        break
        
        default:
            cantDias = -1;
            break;
}
console.log(`El mes seleccionado es ${mes} y tiene ${cantDias} días`)

