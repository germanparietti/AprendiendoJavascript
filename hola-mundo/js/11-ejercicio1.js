'use strict'
//alert("funciona")

// Bloque1 - Ejercicio1-
// Programa que pida dos numeros, que nos diga cual es <,> o si son =
// Bloque1 - Ejercicio1 Plus-
// Si los datos ingresados no son numeros o son numeros iguales o menor a cero, que nos vuelva a pedir

var num1=parseInt(prompt("Ingresa el primer numero",0));
var num2=parseInt(prompt("Ingresa el segundo numero",0));
//console.log(num1,num2);

//---------------------------------------------------------
//Fracmento del codigo del Ejercicio1 Plus
while(num1<=0 || isNaN(num1)){
	num1=parseInt(prompt("Ingreso el primer numero incorrecto, por favor ingrese nuevamente el primer numero",0));
}
while(num2<=0 || isNaN(num2)){
	num2=parseInt(prompt("Ingress el segundo numero incorrecto, por favor ingrese nuevamente el segundo numero",0));
}
//---------------------------------------------------------

if (num1==num2) {
	alert("Los numero son IUGALES");
}else if (num1<num2) {
	alert("El numero "+num1+" es Menor");
	alert("El numero "+num2+" es Mayor");
}else if (num1>num2) {
	alert("El numero "+num1+" es Mayor");
	alert("El numero "+num2+" es Menor");
}else{
	alert("Introduce numeros correctos");
}
