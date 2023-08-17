import './css/style.css'

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

console.warn('\n/*** Document Object Model (document) ***/')

// <h1 id="principal">Clase 02 - SELECTORES</h1>
// console.log(document.children[0].children[1].children[0])
// console.log(document.getElementById('principal'))

const h1Principal = document.getElementById('principal')
console.log(h1Principal)            //!Una representación del objeto
console.dir(h1Principal)            //!Una radiografía del objeto
console.dir(h1Principal.textContent)
h1Principal.textContent = "OTRO TEXTO"
h1Principal.style.color = 'gold'
h1Principal.style.border = '1px solid red'
h1Principal.style.backgroundColor = 'violet'

//!getElementByClassName
const especial = document.getElementsByClassName("especial")
//? console.log(especial) -> sirve para  confirmar en consola los elementos correctos

console.log(especial)
console.log(especial.length) //cant elem
console.log(especial[0].textContent)

especial[2].textContent = 'Mí pan sun sun sun'
especial[2].style.color = 'blue'
especial[2].style.border = '1px solid green'

const jamon = especial[1]
console.log(jamon)
let textoJamon = especial[1].textContent
console.log(textoJamon)

jamon.style.color = 'pink'


//! Seleccionar el ul (lista) -> querySelector
const lista = document.querySelector('ul')
console.dir(lista)

const li = document.createElement('li')   //*createElement li,h2,div,h2...
console.dir(li)
li.textContent = 'Manzanaaaaa'
// console.log(li)
li.setAttribute('class', 'color-dorado especial')
lista.appendChild(li)

/* Seleccionamos el parrafo para ponerle un estilo negrita */
const parrafo = document.querySelector('#parrafo')
parrafo.classList.add('estilo-negrita')
console.log(parrafo)
console.log(parrafo.classList.contains('estilo-negrita'))
console.log(parrafo.classList.contains('estilo-rojita'))


// !querySelectorAll
const todos_los_li = document.querySelectorAll('ul > li')
console.log(todos_los_li)
const manzana = todos_los_li[5]
manzana.classList.remove('color-dorado') //! BORRA una clase

// const h2Picante = document.querySelectorAll('.picante')
// console.log(h2Picante)
// console.dir(h2Picante)

