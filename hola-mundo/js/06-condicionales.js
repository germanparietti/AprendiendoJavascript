'use strict'
// Condicional IF
/* El condicional "IF": Sí "A" es "igual 
(tambien puede ser: diferente, mayor que, menor que)" 
qué "B" entonces haz algo*/

// ejemolos con IF:

/* ejemplo1:
var edad1 = 30;
var edad2 = 12;
if (edad1 > edad2) {
	console.log(edad1 + " es mayor que"+ " "+edad2);
}else{console.log(edad1+ " es inferior");}
*/

/*Operadores relacionales:
Mayor:>
Menor:<
Mayor o igual:>=
Menor o igual:<=
Igual:==
Distinto:!=
*/
var edad=14;
var nombre="Germán Parietti";
if (edad>=18) //el usuario es mayor de edad
 	{
 		console.log(nombre+" tiene "+edad+" años ");
		if (edad <= 33) 
		{ console.log("Todavía eres millenial");}
		else if(edad>=70)
			 {console.log("Eres anciano");
		}
			else{"Ya no eres millenial"}
	
 } else{ //el usuario es mayor de edad
 	console.log(nombre+" tiene "+edad+" años, es MENOR de edad ");
 }


/*
 // Operados lógicos son
AND(Y):&&
OR(O):||
Negación:!
*/
var year = 2028
// Operador de Negación
if (year !=2016) 
{ console.log("El año no es 2016, realmente es:" + year);
}
// Operador AND(Y):&&
if (year >=2000 && year <=2020) 
{ console.log("Estamos en la era acutal");
} else {
	console.log ("Estamos en la era post moderna");
	}
// Operador OR (O)||
if (year == 2008 || (year >= 2009 && year != 2018 && year == 2028)) 
{ console.log("El año termina en "+8);
} else if(year==2018){
	console.log ("Es exactamente 2018");
	}else {
		console.log("Año no registrado");
	}
