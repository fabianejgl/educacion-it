console.log(document.querySelector('title').textContent)

/*
    !El switch es una estructura también de control que permite tomar decisiones en múltiples casos posibles.
    *Un bloque switch se utiliza para comprar una expresión en varios CASOS y ejecutar el bloque de código correspondiente.
*/

let numero = prompt('Ingrese un número entre 1 y 3')
//Opción 1, 2, 3, 4

debugger
switch (numero) {
    case "1":
        console.log('Fue ingresada la opción 1')
        break;
    case "2":
        console.log('Fue ingresada la opción 2')
        break;
    case "3":
        console.log('Fue ingresada la opción 3')
        break;
    case "4":
        console.log('Fue ingresada la opción 4')
        break;

    default:
        console.log('Opción incorrecta')
        break;
}


console.log('FIN')