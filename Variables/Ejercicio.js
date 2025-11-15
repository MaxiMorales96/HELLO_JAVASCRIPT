//Un restuarente esta a puinto de calcular la cuenta de un comercio
//al cliente cual se le suma por separado $2800 + $ 1300 de comida 
// y $900 + $650 de bebida
// crear un programa en JS que calcule el total de la comida,
//total de bebida y el total completo de la cena. Informar el resultado por consola o por un cartel de alerta

var comida = 2800 + 1300;
var bebidas = 900 + 650;
var cena = comida + bebidas;

console.log("El total de comida es: ", comida);
console.log("El total de la bebida es: ", bebidas);
console.log("El total de la cena: ", comida + bebidas);

alert("El total de toda la cena es: " + cena);