'use strict'
/* //Funciones

//Una funcion es una agrupacion reutilizable de un conjunto de instrucciónes

//Aquí Defino la función:
function nombre_edad(nombre,apellido){
    console.log("No te preocupes solo estoy probando");//Esto es un conjunto de intrucciónes
    document.write("AHORA SI TE TOCO EL OCHO CAMACHO LOCO");
    return("hola soy "+nombre+" y mi edad es "+apellido);//Esto son datos que devuleve la función
}
//Aquí defini algunas variables:
var nomb=prompt("Ingresa tu nombre",0);
var edad=prompt("Ingresa tu edad");

//Aquí utilice las variables para ejecutar la función nombre_edad()
console.log(nombre_edad(nomb,edad));//Aquí invoco a la función nombre_edad() para que me muestre por consola
document.write(nombre_edad(nomb,edad));//Aqui invoquo nuevamente la función nombre_edad() para que me lo muestre por pantalla
alert(nombre_edad(nomb,edad));// y aquí nuevamente invoco la función nombre_edad() para que me lo muestre en un alerta
 */
//----------------------------------------------------------------------------------------------------------------------
/* 
//Parametros de una funcion
//Los parametros pueden ser variables, datos u otra función que se pueden pasar a una función pre definida para que ésta 
//pueda ejecutar las instrucciónes con esos datos.

//Aqui defino la funcion calculadora():
function calculadora(num1,num2){
    //Conjuntos de intrucciónes
    console.log("Suma "+(num1+num2));
    console.log("Resta "+(num1-num2));
    console.log("Multiplicación "+(num1*num2));
    console.log("División "+(num1/num2));
    console.log("--------------------------------------------------------------------")
    //return("Hola soy la calculadora")
}
//Invoco la función calculadora() dentro de un for
for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,8)
} */

//Parametros opcionales
//Un parametro opcional son parametros inicializados, osea no necesariamente hay que pasarlos para que la funcion pueda ejecutarce.

/* function calculadora(num1,num2, parametro_opcional=false){
    //Conjuntos de intrucciónes
   
   if(parametro_opcional == false){
    console.log("Suma "+(num1+num2));
    console.log("Resta "+(num1-num2));
    console.log("Multiplicación "+(num1*num2));
    console.log("División "+(num1/num2));
    console.log(parametro_opcional);
    console.log("--------------------------------------------------------------------"+"<br/>")
    //return("Hola soy la calculadora")
   }else{
    document.write("Suma "+(num1+num2)+"<br/>");
    document.write("Resta "+(num1-num2)+"<br/>");
    document.write("Multiplicación "+(num1*num2)+"<br/>");
    document.write("División "+(num1/num2)+"<br/>");
    document.write("--------------------------------------------------------------------"+"<br/>")
    //return("Hola soy la calculadora")
   }
}
//Invoco la función calculadora() dentro de un for
for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,8,true)
} */



//Funcion dentro de otra funcion:
//Esto se puede presentar creando una función "X" en donde en su area de conjunto de instrucciónes, llamamos a otra funcion "A" previamente
//para que se ejecute cuando llamamos a la primer función "X".

function porConsola(num1,num2){
    console.log("Suma "+(num1+num2));
    console.log("Resta "+(num1-num2));
    console.log("Multiplicación "+(num1*num2));
    console.log("División "+(num1/num2));
    console.log("--------------------------------------------------------------------"+"\n")
    //return("Hola soy la calculadora")
}
function porPantalla(num1,num2){
    document.write("Suma "+(num1+num2)+"<br/>");
    document.write("Resta "+(num1-num2)+"<br/>");
    document.write("Multiplicación "+(num1*num2)+"<br/>");
    document.write("División "+(num1/num2)+"<br/>");
    document.write("--------------------------------------------------------------------"+"<br/>")
    //return("Hola soy la calculadora")
}
function porAlerta(num1,num2){
    alert("Resta "+(num1-num2)+"\n"+"Multiplicación "+(num1*num2)+"\n"+"División "+(num1/num2)+"\n");
}


function calculadora(num1,num2, mostrarPor=false){
    //Conjuntos de intrucciónes
   
   if(mostrarPor == "alerta"){
   porAlerta(num1,num2);
   }else if(mostrarPor=="pantalla"){
   porPantalla(num1,num2);
   
   }else{
    porConsola(num1,num2);
   }
   return "SOY GERMAN PARIETTI"
}
var respuesta=""
calculadora(2,7);
calculadora(19,2,"pantalla");
calculadora(20,15,"alerta");
calculadora(21,4);
calculadora(5,10,"pantalla");
respuesta=calculadora(12,13,"alerta");
document.write(respuesta);

//Invoco la función calculadora() dentro de un for
/* for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,8,true)
} */