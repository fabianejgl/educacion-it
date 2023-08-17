import './css/style.css'

const webdev = document.querySelector('#webdev') /*Seleccionar un elemento HTML*/
console.log(webdev)

const guy = document.querySelector('#guy') /*Seleccionar un elemento HTML*/
console.log(guy)

window.addEventListener('scroll', function(){ /*Escucho que el usuario hizo SCROLL */
    /*Una vez que escuché que el usuario hizo scroll */
    //Acá dentro voy a hacer algo
    // console.log('Hizo scroll')

    let posObj = webdev.getBoundingClientRect().top     /*ACÁ se calcula la posicion relativa con respecto a WEBDEV*/
    // console.log(posObj)

    if(posObj < 650){
        webdev.style.animation = 'left-to-right 2s forwards'
        guy.style.animation = 'right-to-left 2s forwards'
    }
})


const webdev2 = document.querySelector('#webdev2') /*Seleccionar un elemento HTML*/
console.log(webdev2)

const guy2 = document.querySelector('#guy2') /*Seleccionar un elemento HTML*/
console.log(guy2)

window.addEventListener('scroll', function(){ /*Escucho que el usuario hizo SCROLL */
    /*Una vez que escuché que el usuario hizo scroll */

    let posObj2 = webdev2.getBoundingClientRect().top     /*ACÁ se calcula la posicion relativa con respecto a WEBDEV*/
    console.log(posObj2)

    if(posObj2 < 750){
        webdev2.style.animation = 'left-to-right 2s forwards'
        guy2.style.animation = 'right-to-left 2s forwards'
    }
})