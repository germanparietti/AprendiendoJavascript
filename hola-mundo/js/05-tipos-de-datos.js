'use strict'

// Operadores
var num1 = 5;
var num2 = 13;
var operadores = num2 * num1;

alert("El resultado de la operación es: "+operadores);


// Tipos de datos
var num_entero = 44;
var cadena_texto = "Hola que tal";
var verdadero_o_falso = true;//el dato booleano tambien puede ser = a false
var numero_falso = "33"// el numero falso se muestra como cadena de texto.
// para convertir el numero falso en un operable podemos usar la funsión numero,parseInt(numero entero) o parse. ej "console.log(parse(numero_falso)+7);"
// tambien podemos convertir cualquier variable a una cadena de texto (string), ej: "console.log(string(num_entero)+4)"

// console.log(cadena_texto);

console.log(typeof num1);//number, variable numerico
console.log(typeof num2);//number, variable numerico
console.log(typeof numero);//undefined, variable no definido
console.log(typeof num_entero);//number, variable numerico
console.log(typeof numero_falso);//string, variable texto en cadena
console.log(typeof verdadero_o_falso);//boolean, variable verdadero o falso
console.log(typeof cadena_texto);//string, variable texto en cadena
console.log(typeof operadores);//number, variable numerico