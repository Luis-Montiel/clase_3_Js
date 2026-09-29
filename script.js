//ejerciicio  2 suma de do nummeros
const prompt = require('prompt-sync')();
let numero1 = prompt("ingrese primer numero = ");
let numero2 = prompt("ingrese segundo numero = ");

numero1 = Number(numero1)
numero2 = Number(numero2)

let resultado = numero1+ numero2;
console.log("la suma sera igual " +resultado);

//ejercicio 3 

let precio1 = prompt("ingrese primer precio de su producto = ");
let precio2 = prompt("ingrese segundo precio de su producto = ");

precio1 = Number(precio1)
precio2 = Number(precio2)

let totalpagar = precio1 + precio2;
console.log("su total a pagar sera " +totalpagar);

//ejercicio 4
let edad1 = prompt("ingrese edad persona 1= ");
let edad2 = prompt("ingrese edad persona 2= ");

edad1 = Number(edad1)
edad2 = Number(edad2)

let sumaedad = edad1 + edad2;
console.log("la suma de las edades es = " +sumaedad);

//ejercicio 5
let nota1 = prompt("ingrese nota 1=  ");
let nota2 = prompt("ingrese nota 2= ");

nota1 = Number(nota1)
nota2 = Number(nota2)

let sumanotas = nota1 + nota2;
console.log("la suma de las edades es = " +sumanotas);

//ejercicio 6
let grupo1 = prompt("ingrese cantidad grupo 1= ");
let grupo2 = prompt("ingrese cantidad grupo 2= ");

grupo1 = Number(grupo1)
grupo2 = Number(grupo2)

let totalestudiantes = grupo1 + grupo2;
console.log("total de estudiantes es de = " +totalestudiantes);

//ejercicio 7
let dinero1 = prompt("ingrese cantidad de dinero 1= ");
let dinero2 = prompt("ingrese cantidad de dinero 2= ");

dinero1 = Number(dinero1)
dinero2 = Number(dinero2)

let totaldinero = dinero1 + dinero2;
console.log("total de dinero es de = $" +totaldinero);
