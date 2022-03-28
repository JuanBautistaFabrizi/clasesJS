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
/* let numero3 = prompt("Por ingrese un número");
let numero4 = prompt("Por ingrese otro número");
resultado = numero3 - numero4;
console.log(resultado); */
/* puedo concatenar strings sumándolos */
/* nombre = prompt("Ingrese su nombre");
let apellido = prompt("Por favor ingrese su apellido");
let nombreCompleto = nombre + " " + apellido;
alert(nombreCompleto); */



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
console.log();
/* llamado a una función */
/* sumaNumeros(4,8,3); */

alert("error intenta");
console.log(resultado);

/* let numerox =parseFloat(prompt("Escriba un número")); 
let numeroy =parseFloat(prompt("Escriba otro número"));


function sumar(x,y) {
    let resultadoNumers;
    resultadoNumers = x + y;
    alert(resultadoNumers);
    
}

sumar(numerox,numeroy);
saludar(nombre,apellido); */

/* Condicionales */
/* SI tal cosa 
    hace esto
SINO 
    hace otra cosa */
let edad = prompt("Ingrese su edad");
let nombrex = prompt("Ingrese su nombre");

if (edad >= 18 || nombrex) {
    alert("Podes tomar bebidas alcoholicas");
} else if( edad >= 120){
    alert("Deberias cuidarte un poco");
}
else{
    alert("No podes tomar cerveza");
}   

switch (dia) {
    case "lunes":
            alert("ir a la tienda");
        break;
        case "martes":
            alert("ir al médico");
        break;
        case 17:
            alert("No podes tomar alcohol")
        break;
    default:
        alert("Ingrese un día correcto");
        break;
}

const boton = document.getElementById("btn");
const footer = document.getElementsByClassName("footer");


