/*
Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
 ¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.
*/

let costo = prompt("Ingresa precio del saco");
console.log(typeof costo);
let  des = prompt("Ingrese descuento")
console.log(typeof des);
parseFloat(costo);
parseFloat(des);
let promedio = costo * des /100;
let precio =  costo - promedio;

alert("El precio del saco es: " + precio + " con un descuento de " + promedio);