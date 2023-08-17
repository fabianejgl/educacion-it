console.log(document.querySelector('title').textContent)

const botones = document.querySelectorAll('button')
console.log(botones)


// botones[0].addEventListener('click',function(){
//     botones[0].style.backgroundColor = 'blue'
//     console.log('Hicieron click sobre mi, BOTON 1')
// })

// botones[1].addEventListener('click',function(){
//     botones[1].style.backgroundColor = 'red'
//     console.log('Hicieron click sobre mi, BOTON 2')
// })

// botones[2].addEventListener('click',function(){
//     botones[2].style.backgroundColor = 'green'
//     console.log('Hicieron click sobre mi, BOTON 3')
// })

// botones[3].addEventListener('click',function(){
//     botones[3].style.backgroundColor = 'yellow'
//     console.log('Hicieron click sobre mi, BOTON 4')
// })

const contenedor = document.querySelector('#contenedor')
console.log(contenedor)

contenedor.addEventListener('click', function(objectoEvento){
    // console.log('Hicieron click', objectoEvento)
    console.log(objectoEvento.target)
    if(objectoEvento.target.id !== 'contenedor'){
        console.warn('Hicieron click sobre botones')
        console.dir(objectoEvento.target)
        // objectoEvento.target.style.backgroundcolor = 'red'
        objectoEvento.target.style.backgroundColor = objectoEvento.target.dataset.color || 'purple'

    }
})