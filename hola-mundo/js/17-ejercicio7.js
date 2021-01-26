'use strict'
/* 
Hacer una tabla de multiplicar de un numero introducido por pantalla
*/

var num=parseInt(prompt("Introducir un numero: ",0));
var hasta=parseInt(prompt("Ingrese hasta que numero quiere la tabla: ",0));
var tabla="";
for(tabla=0;tabla<=hasta;tabla++){

        console.log(num+" x "+tabla+" es igual a: "+(num*tabla));
}