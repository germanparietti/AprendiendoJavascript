'use strict'
//Parametros de REST y SPREAD
//Un parametro REST se escribe con "..." luego el nombre que le definiriamos dentro de los parametros que recibiría una función "x"
//esto hace que de una lista se forme un array
//Un SPREAD es  una lista formada a partir de un array, lo que seria el efecto inverso al REST.
function listadoFrutas(f1,f2, ...resto_de_frutas){
    console.log("Fruta 1: "+f1);
    console.log("Fruta 2: "+f2);
    console.log(resto_de_frutas);//Esto muestra un array segun la lista recibida
    return resto_de_frutas;
}
listadoFrutas("banana","manzana","pera","coco","mango","ananá");


var verduras=["pepino","lechuga","cacahuate","chimichurry"];
listadoFrutas("matambrito",...verduras,"milaneza","fideos");//aquí se esta mandando como parametro "f1"==matambrito, como parametro
//"f2"==(al primer elemento del array verduras), en el caso del parametro "f2" lo que ocurre es que del array verduras se extrae la lista
//de todos sus elementos y se toma el primero como parametro "f2".Luego con el resto de la lista, la funcion listadoFrutas, los toma como REST
//los convierte en un array, que luego se muestra en la consola.


var resultado=listadoFrutas("a","b",...verduras,"C","D");
document.write(resultado);