"use strict";
console.log("Hola mundo desde Typescript!");
let nombre = "Maxi";
let numero = 22;
let booleano = true;
let alumno = "Valentina";
class Auto {
    constructor(marca, modelo, cantidadRuedas, cantidadPuertas) {
        console.log('Se creó un auto!');
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadRuedas = cantidadRuedas;
        this.cantidadPuertas = cantidadPuertas;
    }
}
class Estudiante {
    constructor(name, age) {
        this.nombre = name;
        this.edad = age;
        console.log('Se creo la instancia Estudiante (El objeto)');
        console.log('this --->', this);
    }
}
const e1 = new Estudiante('Sebastian', 22);
const e2 = new Estudiante('Adrian', 25);
const e3 = new Estudiante('Alexander', 19);
const e4 = new Estudiante('Gonzalo', 23);
console.log('---------------------------------');
console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);
console.log('---------------------------------');
const e5 = new Estudiante('Leonardo', 28);
console.log('---------------------------------');
console.log(e5);
console.log('---------------------------------');
console.log('Objetos literales');
const joaquin = {
    nombre: 'Joaquin',
    edad: 22,
};
console.log(joaquin);
const tadeo = {
    nombre: 'Joaquin',
    edad: 19
};
console.log(joaquin);
const jeremias = {
    nombre: 'Jeremias',
    edad: 21
};
console.log(jeremias);
console.log('------------------------------------------');
class Pelota {
    constructor(color) {
        this.isRodar = false;
        console.log('Se creo una pelota');
        this.color = color;
        this.informacion();
    }
    informacion() {
        console.log('Soy una pelota... mi color es: ', this.color);
    }
    rebotar() {
        console.log('Empiezo a rebotar, soy de color:', this.color);
    }
    cambiarEstado() {
        this.isRodar = !this.isRodar;
    }
}
const p1 = new Pelota('Verde');
const p2 = new Pelota('Roja');
const p3 = new Pelota('Amarilla');
p1.rebotar();
p2.rebotar();
p3.informacion();
console.log(p1.isRodar);
p1.cambiarEstado();
console.log(p1.isRodar);
p1.cambiarEstado();
console.log(p1.isRodar);
