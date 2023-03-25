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

// Tamaño de un string

const browserType = 'mozilla';
browserType.length;

browserType[0];

browserType[browserType.length-1];

// Encontrar encontrar ciertos caracteres en una string

const browserTypeIncludes = 'mozilla';

if (browserTypeIncludes.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

// Empieza con 

const browserTypeStar = 'mozilla';

if (browserTypeStar.startsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

// Termina con

const browserTypeEnd = 'mozilla';

if (browserTypeEnd.endsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

// Encontrar la posición de una sub-string.

const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers')); // 20

console.log(tagline.indexOf('x')); // -1

const firstOccurrence = tagline.indexOf('developers');
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

// Extraer una string.

const browserTypeSlice = 'mozilla';
console.log(browserTypeSlice.slice(1, 4)); // "ozi"

// cambiar a mayusculas y minusculas

const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// reemplazar string

const browserTypeReplace = 'mozilla';
const updated = browserTypeReplace.replace('moz','van');

console.log(updated);      // "vanilla"
console.log(browserType);  // "mozilla"

// Making new strings from old parts

const list = document.querySelector('.output ul');
list.innerHTML = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
  // write your code just below here
  const treeLetters = station.slice(0,3);
  const indexComa = station.indexOf(';');
  const removeNumber = station.slice(indexComa + 1);
  const result = treeLetters + ': ' + removeNumber;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}




