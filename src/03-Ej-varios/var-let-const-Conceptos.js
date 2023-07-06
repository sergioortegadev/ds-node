// VAR es de ambito global o de función

var global = "variable global";
let globalLet = "Let Global";

function funcionProbar() {
  global = "hola dentro de funcion";
  let globalLet = "let dentro de func declarada";
  console.log(global);
  console.log(globalLet);
  let letLocal = "hola";
}

//console.log(letLocal);
console.log(global); // escribe: "variable global"
console.log(globalLet); // escribe: "Let Global"
funcionProbar(); // escribe "hola dentro de función" y debajo "let dentro de func declarada"

const funcProbarAnonima = function () {
  var global = "hola dentro de funcion anónima";
  console.log(global);
};

funcProbarAnonima(); //  escribe "hola dentro de función anónima"
console.log(global); // escribe "hola dentro de función"

const funcProbarArrowFunction = () => {
  var global = "hola dentro de arrow function";
  console.log(global);
};

funcProbarArrowFunction(); //  escribe "hola dentro de arrow function"

console.log(global); // escribe "hola dentro de función"
