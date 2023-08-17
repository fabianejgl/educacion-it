console.log(document.querySelector('title').textContent)

// Acciones o sucesos que ocurren en una aplicación web. Que pueden ser detectados y manejados con JS. Los eventos pueden ser acciones de usuarios, como también eventos generados por el navegador.

// Buscar: mdn events
//developer.mozzilla.org/es/docs/Learn/JavaScript/Buiilding_Blocks/Events
//.../JavaScript/Web/events

const btn = document.querySelector('#btn')
console.log(btn)
console.dir(btn)

// ! 1° forma
// btn.onclick = function() {
//     console.log('Me hicieron click otra vez')
// }

// ! 2° forma - NO RECOMENDADA.
function click() {
    console.log('Me hicieron click otras vez')
}

btn.onclick = click

/* addEventListener*/
const btnAddEl = document.getElementById('btnAddEL')
console.log(btnAddEl)

// btn.addEventListener(<evento>, <callbakc>)
btnAddEl.addEventListener('click', function() {
    console.log('Clickema ahora con el addEventListener')
})

btnAddEl.addEventListener('click', function() {
    console.log('Clickema ahora con el addEventListener (2)')
})

btnAddEl.addEventListener('click', function() {
    console.log('Clickema ahora con el addEventListener (3)')
})

btnAddEl.addEventListener('click', function() {
    console.log('Clickema ahora con el addEventListener (4)')
})