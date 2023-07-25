// operador de encadenamiento opcional: "?"
// También podría servir para saber si hay algo (alguna propiedad) dentro del objeto, para que no de error, sino undefined.

// En objetos operadores de fusión nula "??": nullish coalescing (desde ES11). similar a "or"

const sergio = async function () {
  return "Dani";
};

let ret = sergio;
console.log(ret);

const persona = {
  nombre: "Sergio",
  /* dirección: {
    calle: "Av. Colon",
    numero: 3500,
  }, */
};

console.log(persona);

console.log(persona.dirección?.calle); // undefined, porque use "?"

const direccion = undefined ?? "sin datos de dirección";

persona.direccion = direccion;

console.log(persona);

const empleados = [];

empleados.push({
  id: 1,
  nombre: "Sergio",
  dirección: {
    calle: "Av. Colon",
    numero: 3500,
  },
  loguearse: function () {
    return `El empleado: ${this.nombre}, tiene id: ${this.id}`;
  },
});

console.log(empleados);
console.log(empleados[0].loguearse());

/*  - - - TAREA - - - - */
// for n vueltas
// array.push() meter
// Hacer un array de objetos, que almacene personas, y tiene que tener nombre, apellido, edad (random 1-100).
// que me muestre los mayores de 18 años
// se podría usar filter() en lugar de un for
// se podría usar json placeholder API, agregarle edades.

// Ir pensando si se hará el ejercicio de Truco o Sudoku
// libreria npm data generator

// Probar la librería three js cubos en 3D
