console.log(document.querySelector('title').textContent)

// CRUD : CREATE | READ | UPDATE | DELETE
// ABM  : ALTA BAJA MODIFICACION

console.warn('\n/*** CRUD: CREATE | READ | UPDATE | DELETE ***/')

// CREATE

let datos = []

//Read ALL
function listarElems(){
    console.log(datos)
}
//READ ONE
function listarElem(indice){
    if(indice >= 0 && indice < datos.length){
        console.log(datos[indice])
    }else{
        console.error('indice inválido')
    }
}

//CREATE: (agregar elem)
function agregarElemento(elemento){
    // if(typeof elemento !== undefined){
        datos.push(elemento)
    // }
}

console.log({datos})
listarElems()
agregarElemento('manzana')
agregarElemento('limón')
agregarElemento('naranja')
console.log({datos})

listarElems()
listarElem(0)
listarElem(1)
listarElem(2)
listarElem(-5) //! indice invalido
listarElem(5) //! indice invalido


function actualizarElem(indice, nuevoElem){
    datos[indice] = nuevoElem
}

actualizarElem(2,'pera')
actualizarElem(2,'banana')

function eliminarElem(indice){
    datos.splice(indice, 1)
}

eliminarElem(1)
eliminarElem(2)
console.log({datos})

