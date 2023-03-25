// Arrays

//¿Cómo crear las Arrays?

const habitacion = ['cama', 'escritorio', 'computadora', 'ropa'];

const aleatorio = ['roman', 54, true, [0, 1, 2]]; // Esta se conoce como matriz multidimensional

const listaSuper = ['carne', 'leche', 'heuvo', 23];


// Acceder y modificar las arrays

habitacion[0]; // accede al elemento cama

habitacion[0] = 'sabana'; // cambia cama por sabana

// Acceder a arrays dentro de otras arrays

aleatorio[3][1];

// ¿Cómo saber la longitud de una matriz?
// de igual forma que con las string con el metodo lenght

const tamañoDeArray = habitacion.length; // devuelve 4

const tamañoDeMultiArray = aleatorio[3].length; // devuelve 3

// Esto tiene muchos usos para el más comun es para recorrer una lista con el ciclo for

for (var i = 0; i < habitacion.length; i++) {
    console.log(habitacion[i])
};

// Este pesadazo de codigo imprimira en consola todos los elementos de la array habitacion

// Recorrer una multi-array

const granja = ['gallina', 'cerdo', 'vaca', ['lobo', 'puma', 'serpiente']]

for (let i = 0; i < granja.length; i++) {
    if (typeof(granja[i]) === 'object') {
        for (let l = 0; l < granja[i].length; l++) {
            console.log(granja[i][l])
        }
    }
};

// Manera con empleando codigo para recorrer una array

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
};


// Encontrar en indece de un elemento dentro de una array

habitacion.indexOf('computadora'); // devuleve 2

// añadir elemetos

const paises = ['argentina', 'brasil', 'alemania'];

paises.push('china'); // añane china a la array paises

paises.push('chile', 'estados unidos'); // añade chile y estados unidos ala array paises

// De vuelve el tamaño de la nueva arrays

const paisesLenght = paises.push('bolivia', 'peru');

console.log(paises); // ['argentina', 'brasil', 'alemania','china', 'chile', 'estados unidos', 'bolivia', 'peru'];
console.log(paisesLenght);  // 8

// Para añadir el elemento al principio de la array

paises.unshift('mexico');

console.log(paises);

// Remover items

habitacion.pop() // remueve ropa

console.log(habitacion)

// El metodo pop retorno el item que fue removido si a este se lo guarda en una variable

const itemRemove = habitacion.pop();

console.log(itemRemove); // Computadora

// ¿Y si no sabes el indice del elemento que queremos remover?

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];

const index = cities.indexOf('Liverpool');

if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

// Slice recibe dos parametros el primero el indice y el segundo cuantos elemento seran borrados

// Cambiar todos los elemento de una array

function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled);  // [ 10, 4, 14, 12 ]
  
// map toma como parametro una funcion para que esta sea aplicada a cada elemento

// Filtrado de elemento de una array

function isLong(city) {
    return city.length > 8;
  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  console.log(longer);  // [ "Liverpool", "Edinburgh" ]
  

// China es un pais de oriente

for (i = 0; i < paises.length; i++) {
    if (paises[i] === 'china') {
        console.log(`${paises[i]} es un pais de oriente`)
    } else {
        console.log(paises[i])
    }
};

// Metodos de Arrays



