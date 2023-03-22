// variables

// Formas de declarar variables

let myName = 'Roman';
let myAge = 20;

// Esta manera de declarar variables se considera mala practica.

var birthDay = 4;
var birthMount = 'April';

/* Con const la variable debe de inicializarce cuando es declarada 
y segundo esta no puede ser modifica en el */

// const num; wrong 

const count = 1; // good

// const count = 2; wrong 

// Una variable puede ser cambiada o actualizada(si no es declarada como const).

myName = 'Pedro';
myAge = 25;

// Arrays

// Una array es un objeto que encierra diferentes tipos de datos separados por coma.

let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

// De esta forma se pueden acceder a los datos de la array

myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40

// Objetos 

// Un objeto es una estructura de codigo que represente a algo de la vida real.

let dog = { name : 'Spot', breed : 'Dalmatian' };

// typeof devuelte el tipo de dato de una variable

typeof dog;

// Una variable const puede actualizar, agregar o eliminar si se usa para declarar un objeto

const bird = { species : 'Kestrel'};
console.log(bird.species);  // "Kestrel"

bird.species = 'Striated Caracara';
console.log(bird.species);  // "Striated Caracara"

// Incremento 

let num1 = 4;
num1++;

// Decremento

let num2 = 6;
num2--;
num2;

// Operadores de Asignación

// adición

x = x + 4;

x += 4; 

// Sustración

x = x - 4;

x -= 4;

//multiplcación

x = x * 4;

x *= 4;

//divisón

x = x / 5;

x /= 5;

