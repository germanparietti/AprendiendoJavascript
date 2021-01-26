'use strict'
/*
Bloque1 - Ejercicio2- Consigna
Utilizando un bucle, mostrar l suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado

*/

var suma=0;
var contador=0;
do{
var dato=parseInt(prompt("introducir un numero",10));
if (isNaN(dato)) {
	dato=0;
	}else if(dato>=0) {
		suma+=dato; //esto es igual a "suma=suma+dato"
		contador++;	
console.log(suma,contador);
	}
}while(dato>=0){
alert("la suma es"+suma);
alert("la media es"+(suma/contador));

}