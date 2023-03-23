// Declarativas

function myFunction() {
    return 3;
}

myFunction();

// Expresión o Anonima

let miFuncion = function(a,b) {
    return a + b;
}

miFuncion(1,2);

// Saludar estudiantes

function saludarEstudiantes(a) {
    console.log(`Hola, ${a}. Que gusto verte`);
}

saludarEstudiantes("roman");

// ¿Qué tipo de dato es?

function solution(valor) {
    return typeof valor;
}

solution("roman");
solution(10);
solution(true);

/*
    Convierte el siguiente código en una función,
    pero, cambiando cuando sea necesario las varia-
    bles constantes por parámetros y argumentos 
    en una función:
 */

function presentacion(name, lastname, nickname ) {
    const completeName = name + ' ' + lastname;
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

presentacion("roman", "ponce", "p11");