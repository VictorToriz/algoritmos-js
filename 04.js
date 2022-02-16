/*
Haz javascript para : Calcular el perímetro de un cuadrado. 
Los valores deben de ser capturados con promt y mostrados con alertas.
*/

let cuadro = prompt("Ingresa un lado del cuadrado");
console.log(typeof cuadro)
let perímetro = parseFloat (cuadro) * 4;
alert("El perímetro es "+ perímetro)