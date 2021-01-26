'use strict'
//alert("hola");
/* 
Programa que pida dos numero y que nos diga: 
¿cual es el mayor?, 
¿el menor? y si 
¿son iguales?
PLUS: Si los numeros son menores o iguales 
a cero o no son un numero, pedirlos nuevamente
*/

var num1= parseInt(prompt('Por favor ingresa el primer numero','')); 
var num2= parseInt(prompt('Por favor ingresa el segundo numero',''));
while(num1<=0||num2<=0||num1!=Number||num2!=Number){
    num1= parseInt(prompt('Por favor ingresa el primer numero correctamente','')); 
    num2= parseInt(prompt('Por favor ingresa el segundo numero correctamente',''));
}
if(num1==num2){
    console.log('Son iguales')
}else if(num1>num2){
    console.log('El mayor es '+ num1);
    console.log('El menor es '+ num2);
}else{
    console.log('El mayor es '+ num2);
    console.log('El menor es '+num1);
}