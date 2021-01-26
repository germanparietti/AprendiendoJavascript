'use strict'


/*  
Ingresar un numero y que luego nos diga si es par o impar y si no es un numero que nos vuelva a pedir el ingreso
*/

var num = parseInt(prompt('Por favor ingresa un numero: ',0));
while(isNaN(num)){
        num = parseInt(prompt("Por favor ingrese un numero correctamente: ",0));
}if(num%2==0){
        console.log("el numero "+ num+" es PAR");
}else{
        console.log("El numero "+num+" es IMPAR")
};