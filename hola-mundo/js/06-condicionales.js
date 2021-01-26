'use strict'
//Condicional IF
//Si A es igual a B entonces haz algo
/* var edad1 = 30;
var edad2 = 12;

//Si pasa esto
if(edad1 > edad2){
    //Ejecuta esto
    document.write("Edad "+ edad1 + " es mayor que esta edad: "+ edad2);
}else{
    document.write("La edad "+ edad1 + " es inferior a la edad "+ edad2);
};
Operadores relacionales
Mayor:>
Menor:<
Mayor o igual: >=
Menor o iugal: <=
Igual: ==
Distinto !=

 */

 var edad1 = 74;
 var nombre = "David Suarez";
 if(edad1 >= 18){
     console.log(nombre+" tiene "+edad1+" años, es mayor de edad");
     if(edad1 <= 33){
         console.log("todavia eres millenial");
     }else if(edad1 >= 70){
         console.log("Eres anciano");
     }else{
         console.log("Ya no eres millenial");
     }
 }else{
    console.log(nombre+" tiene "+edad1+" años, es menor de edad");
    console.log("Eres un niño");
 }
/* 
 //Operadores Logicos
 AND (Y):&&
 OR (O): ||
 Negación: ! */

 //Negación
 var year= prompt("Ingrese el año"," AQUI");
 if(year != 2016){
     console.log("El año no es 2016, realmente es: "+year)
 }

 //AND
 if(year >= 2000 && year <= 2021 && year != 2020){
     console.log("Estamos en la era actual");
 }else{
     console.log("Estamos en la era post moderna");
 }

 // OR
 if(year == 2008 || (year >= 2018 && year == 2028)){
     console.log("El año termina en 8");
 }else{
     console.log("El año no puede terminar en 8 por el momento");
 }