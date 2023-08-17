console.log(document.querySelector('title').textContent)

/*
 while (condicion){ //!<=cpmdocopm de corte
    ?codigo
}
*/

let indice = 1
let pasos = parseInt(prompt('Ingrese cant de pasos'))

while (indice<=pasos){
    console.log(`Dio ${indice} paso de ${pasos} pasos`);
    indice++;
}

/*
    !Bucle o ciclo do while
    *El bloque Do While es muy similar al WHILE pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es false.
    ? DO WHILE SE EJECUTA AL MENOS UNA VEZ
    ?Casos de uso típico: el menú de cajero automática o los menú de juegos.
 */

console.warn('\n/*** !Bucle o ciclo Do while ***/')

/* {
    ?codigo a ejecutar en cada iteración
} while (condición) //! <= condición de ecorte se evalúa al final
*/

let index = 5
debugger
do {
    console.log(index);
    index++; // index = index+1
    debugger
} while (index <= 5);