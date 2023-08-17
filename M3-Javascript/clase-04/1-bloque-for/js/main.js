console.log(document.querySelector('title').textContent)

//* BLOQUE FOR //

//! SIMILAR AL WHILE PERO HAY QUE INICIALIZAR DENTRO DEL MISMO BLOQUE LA VARIABLE A ITERAR
for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    console.log('Se ejecutó, veces:', i)
    
}

console.warn('-------------------------')
const letras = ['a','b','c','d','e']

console.log(letras[1])
console.log(letras[4])
console.log(letras.length)

for (let i = 0; i < letras.length; i++) {
    console.log(letras[i])
}