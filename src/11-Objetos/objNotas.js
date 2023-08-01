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

/*  - - - - Más Notas Object - - -  */
const person = () =>
  new Object({
    name: "Sergio Ortega",
    edad: 42,
    profesion: "developer",
  });
let arreglo = Array(1).fill(person());
console.log(arreglo);

/*  == Funciones Prototipicas ==  */

// -------- Sin "new"----------
Object.prototype.acelerar = function acelerar(cuanto) {
  console.log(`  Acelero a ${cuanto}km/h  `);
};

function car(marca, modelo) {
  return {
    marca,
    modelo,
  };
}

car2.prototype.indicadorCombustible = function () {
  return this.tanque;
};
const miCorolla = car("Toyota", "Corolla");

console.log(typeof miCorolla);
miCorolla.tanque = 40;
console.log(miCorolla);
miCorolla.acelerar(100);
miCorolla.indicadorCombustible;

// -------- Con constructor "new"----------

function car2(marca, modelo, maxVel) {
  (this.marca = marca), (this.modelo = modelo);
  this.maxVel = maxVel;
  this.isVeloz = this.isFast;

  this.mostrarMaxVel = function () {
    return this.maxVel;
  };
  this.isFast = function () {
    if (this.maxVel > 250) {
      return console.log("es veloz");
    } else return console.log("no es veloz");
  };
}

const miJeep = new car2("Jeep", "Compass", 350);

console.log(typeof miCorolla);
miJeep.tanque = 52;
console.log(miJeep);
miJeep.acelerar(120);
console.log(miJeep.indicadorCombustible());
console.log(miJeep.maxVel);
console.log(miJeep.mostrarMaxVel());
console.log(miJeep.isFast());
//console.log(miJeep.isVeloz());
