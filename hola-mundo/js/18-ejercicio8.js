'use strict'
/* 
Hacer una calculadora:
-Pedir dos numero por pantalla
-Si no es un numero que nos lo vuelva a pedir
-En el cuerpo de la pantalla, en un alerta y en la consola que nos devuelva el resultado de
sumar, restar, multiplicar y dividir
*/

var num1= parseInt(prompt("Ingrese el primer numero: ",0));
var num2= parseInt(prompt("Ingrese el segundo numero: ",0));
var resultado="";
var resultadoCMD=""
while(isNaN(num1)||isNaN(num2)){
        num1= parseInt(prompt("Ingrese el primer numero: ",0));
        num2= parseInt(prompt("Ingrese el segundo numero: ",0));
};
resultado = num1+" + "+num2+" = "+ (num1+num2)+"</br>"+
           num1+" - "+num2+" = "+ (num1-num2)+"</br>"+
           num1+" x "+num2+" = "+ (num1*num2)+"</br>"+
           num1+" / "+num2+" = "+ (num1/num2)+"</br>";
resultadoCMD = num1+" + "+num2+" = "+ (num1+num2)+"\n"+
                num1+" - "+num2+" = "+ (num1-num2)+"\n"+
                num1+" x "+num2+" = "+ (num1*num2)+"\n"+
                num1+" / "+num2+" = "+ (num1/num2)+"\n";
document.write(resultado);
console.log(resultadoCMD);
alert(resultadoCMD);
