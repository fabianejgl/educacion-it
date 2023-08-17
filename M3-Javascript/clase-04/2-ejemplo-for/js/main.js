console.log(document.querySelector('title').textContent)

let nombre = 'Maxi'
const PI = 3.14

// window.alert('Mensaje')          mensaje en pantalla en un cuadro de dialogo
// window.prompt('Mensaje', "Valor por defecto")     Mensaje que solicita al user que ingrese un dato
// window.confirm('Mensaje')        forma de pedirle al usuario una confirmación (devuelve T o F)
// console.log('Mensaje')           Emite mnsj por consola (devtools)

// !ALERT
// alert('Mensaje')

// !PROMPT
// let NUM = prompt('Ingrese un numero', '10') //Siempre devuelve STRING

// !CONFIRM
// let res = confirm('Desea continuar?') //devuelve T o F
// console.log(res) //Devuelve true/false.

// * Tengo diferentes métodos dentro del objeto del DOM (document)
/*
? document.getElementById('ID') | Retorna el único ID
? document.getElementsByClassName('CLASS') | Retorna una lista de elementos que concuerdan con el nombre de la clase (Nos devuelve un HTMLCollection) | Y lo manipulamos como si fuera un array
?document.getElementByTagName('TAG') | retorna lista de elems q concuerdan con el nombre de la clase (devuelve un HTMLColecction)| Y lo manipulamos como si fuera un array

?---------------------------------

?document.querySelector('SelectorCSS') | retorna primer elemento que coincida con el selector. La sintaxis es la misma de CSS.
?document.querySelectorAll('SelectorCSS') | retorna lista de elems que coincidan con el selector cuya sintaxis es igual a la de CSS. | Y lo manipulamos como un array

?---------------------------------

?document.createElement('tag) | Crea un elem HTML por código
*/


let colors =  ['red','gold','blue', 'purple', 'green']
let colores = ['rojo','dorado','azul', 'purpura', 'verde']
console.log(colores)

const listaColores = document.getElementById('lista-colores')
// console.log(listaColores) 

const ul = document.createElement('ul')

for (let i = 0; i < colors.length; i++) {
    // console.log(`${colores[i]} = ${colors[i]}`)
    
    const li = document.createElement('li')
    li.textContent = colores[i]
    // !OPCION 1
    li.style.color = colors[i]
    
    ul.appendChild(li)
}

for (let i = 0; i < ul.children.length; i++) {
    console.log(ul.children[i])
    // !OPCION 2
    ul.children[i].style.color = colors[i]
}

console.log(ul)
console.dir(ul)
listaColores.appendChild(ul)
