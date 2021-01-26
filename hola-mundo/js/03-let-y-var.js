'use strict'
// Pruebas con Let y Var
var años = 34;
console.log(años); //valor 34

if (true) {
	var años = 35;
	console.log(años); //valor 35
} 

console.log(años); //valor 35

// Prueba con Let
var texto = "Variable";
console.log (texto); //valor Variable

if (true) {
	let texto = "Let";
	console.log (texto); //valor Let
}

console.log (texto); //valor Variable