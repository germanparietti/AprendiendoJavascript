'use strict'

/*
Bloque1 - Ejercicio3- Consigna
Hacer un programa que muestre todos los numeros
entre dos numeros introducidos por el usuario
*/


var num1=parseInt(prompt("Introdusca el primer numero",0));
var num2=parseInt(prompt("Introdusca el segundo numero",0));
var i="";
if (num1<num2) {
document.write("<h1>De"+num1+"a"+num2+"estan estos numeros:</h1>");
for(i=num1;i<=num2;i++){
	document.write(i+"<br/>");
}
}else if (num1>num2) {
document.write("<h1>De"+num1+"a"+num2+"estan estos numeros:</h1>");
for(i=num2;i<=num1;i++){
	document.write(i+"<br/>");
	}
}else{document.write("<h1>Son iguales, no hay un numero en el medio</h1>")};

/*
Investigar más sobre el "bucle For" para JS, cuales son las partes que la componen y como funciona
Buscar ejemplos donde se puede aplicar.
*/
