'use strict'
// alert("Bucle while");

var year = 2018;
while (year <=2051)
// muestra esto
{
	console.log("Estamos en el año "+year);
	if (year==2040) {break;}
year++;
}

// do while
var years = 30;
do{
	console.log("Solo cuando sea diferente de 30:"+years)
years--;
}while(years>25);
