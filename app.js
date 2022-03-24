/* variables de scope local*/
let number = 1;
let apodo = "gringo";

/* Number de tipo entero */
let numero = 3;
let numero2 = 5;

/* utilizo una variable para guardar las operaciones */
let resultado;
numero = 5;

/* variable de tipo string o cadena de texto*/
var nombre = "pedro";

/*variable number de tipo float o decimal*/
const pi = 3.1428;

/* variable de tipo boolean */
let prendido = true;

/* operaciones con variables */
resultado = numero + numero2;

/* formas de mostrar el resultado,por un mensaje de alerta o por consola */
alert(resultado); 
console.log(resultado); 

/* utilizo la función prompt para almacenar un valor en una variable */
let numero3 = prompt("Por ingrese un número");
let numero4 = prompt("Por ingrese otro número");
resultado = numero3 - numero4;
console.log(resultado);
/* puedo concatenar strings sumándolos */
nombre = prompt("Ingrese su nombre");
let apellido = prompt("Por favor ingrese su apellido");
let nombreCompleto = nombre + " " + apellido;
alert(nombreCompleto);

/* 
operadores aritméticos
+ suma 
- resta 
/ división 
* multiplicación 
% resto
 */

/* declaración de una función */
function sumaNumeros(x,y,z) {
    let resultado2;
    resultado2 = x + y + z;
    alert(resultado2);
}

/* llamado a una función */
sumaNumeros(4,8,3);

alert("error intenta");
console.log(resultado);