// - - - Funciones declaradas - - -

function funcionDeclarada(a, b) {
  return a + b;
}
console.log("funcionDeclarada con return: ", funcionDeclarada(3, 5));
function funcionDeclarada2(a, b) {
  console.log("funcionDeclarada2 console log interno: ", a + b);
}
console.log("funcionDeclarada2 sin return: ", funcionDeclarada2(3, 5));

var a = [];
function suma(a) {
  a.push("hola");
  console.log(a);
}

suma(["chau"]); //no toma el arreglo declarado en linea 12, sino que es otro nuevo - no modifica Heap
//suma(a); //modifico el arreglo declarado en linea 12 - modifica Heap
console.log(a);

let b = {
  nombre: "Sergio",
  mostrarNombre: function () {
    console.log("Mi nombre es", this.nombre);
    console.log(this);
  },
};

b.mostrarNombre();

/* REVISAR en funciones declaradas el this hace referencia al contexto del padre */

//  - - - Arrow function - - -
const arrowFunction = (a, b) => a + b; //retorno implícito de una linea
console.log("arrowFunction", arrowFunction(3, 9));
arrowFunction(4, 7);
let af = {
  nombre: `Arrow Function`,
  mostrarNombre: () => {
    console.log("Mi nombre en AF es: ", af.nombre);
    console.log(this);
  },
};

af.mostrarNombre();
/* REVISAR en arrow function el this hace referencia a la misma función */

// Revisar esto de random, no funciona
const randomFunc = (/* from = 2, to = 7 */) => Math.floor(Math.random());

console.log(randomFunc(2, 7));
