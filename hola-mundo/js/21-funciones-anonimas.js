'use strict'
//Funciones Anonimas
//Es una función que no tiene nombre

/* var peliculas=function(nombre){
    return "la peliculas es "+nombre;
}
 */

 function sumame(num1,num2,sym,sx2){
     var suma=num1+num2;
     sym(suma);
     sx2(suma*2);
     return suma;
 }

 sumame(5,6,(dato)=>{
     console.log("la suma es "+dato);

 },function(dato){//tambien esta la funciono flecha que sería remplazar la palabra "function" por "=>" quedando así: "(dato)=>{}".
     console.log("la suma por dos es "+dato);
     return dato;
 });
 