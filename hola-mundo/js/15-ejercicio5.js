'use strict'
/*
Muestre todos los numeros divisiores de un numero introducido en un prompt
*/

var num1=parseInt(prompt("Ingresa un numero",0));
var divisor=0;

for(divisor=0; divisor<= num1; divisor++) {
	if(num1%divisor==0){
		console.log(divisor)
	}
}