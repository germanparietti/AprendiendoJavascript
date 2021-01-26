'use strict'
/*
Bloque1-Ejercicio4-Consigna
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var num1=parseInt(prompt("Introdusca el primer numero",0));
var num2=parseInt(prompt("Introdusca el segundo numero",0));
while(num1<=num2){
	if((num1%2)!=0){
		console.log(num1)
		
	}num1++
}while(num1>num2){
	if((num2%2)!=0){
		console.log(num2)

}num2++}