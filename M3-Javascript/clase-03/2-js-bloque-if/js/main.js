console.log(document.querySelector('title').textContent)

// let edad = 18
// //debugger -> BREAKPOINT
// if (edad >= 18) {
//     // debugger
//     console.log('Soy mayor de edad')
//     console.log('Podes acceder al contenido')
// }else{
//     // debugger
//     console.log('Sos menor')
//     console.log('Olvidate pa, rajá')
// }


/* 
!El debuggete s una herramienta para observar internamente cómo funciona el programa
*Para activarlo lo puedo hacer on la palabra reservada 'debugger'
*/
console.warn('----------------------------------------');

//Solo puedene entrar >18 y <80
//!Prueba de escritorio
let edadString = prompt('Ingrese suedad')
let edadNumber = Number(edadString) //!? CASTEAR A NUMBER

if (edadNumber >=18 && edadNumber <= 80){
    console.warn('Cumplis')
}else{
    console.error('No cumplís el requisito, rajá pibe')
}