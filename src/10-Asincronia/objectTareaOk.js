// Trae objeto de JSON PLACEHOLDER
// Usuario ingresa nuevo registro por consola (usando "readline" instalar via npm)
import readline from "readline";

import fetch from "node-fetch"; // necesita instalar node-fetch via npm

let db = [];
let dbConEdad = [];
let dbMayores = [];

const traerDatos = () => {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((json) => (db = json))
    .catch((error) => console.log(error));
};

const meterEdad = () => {
  db.forEach((el) => {
    delete el.username;
    delete el.address;
    delete el.phone;
    delete el.website;
    delete el.company;
  });
  dbConEdad = [...db];
  dbConEdad.forEach(function (el) {
    el.age = Math.floor(Math.random() * 100);
  });
};

const filtrarMayores = () => {
  dbConEdad.forEach((el) => {
    if (el.age >= 18) {
      dbMayores.push(el);
    }
  });

  console.log(" DB con todos los usuarios ");
  console.table(dbConEdad);
  console.log(" DB solo con los mayores de 18 años ");
  console.table(dbMayores);
};

const saludoInicial = () => {
  console.clear();
  console.log(`
  +-----------------------------+
  |      ¡ Bienvenidos !        |
  +-----------------------------+
  `);
};
let saludoFinal = `\n
+------------------+
│     ¡ Chau !     │
+------------------+
    |  (•◡•)  | 
      |     | 
        ——
      |    |
      |_   |_\n`;

const options = () => {
  console.log(` Elija una opción\n
    1. Ver db original de {JSON} Placeholder 💻
    2. Quitar datos extra, añadir edad aleatoria 💾  y mostrar db
    3. Filtrar mayores 👵  👴 de 18 años y mostrar db
    4. Exit ❌
    `);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Your choice (1-4): ", async (input) => {
    switch (input) {
      case "1":
        rl.close();
        console.log(db);
        options();
        break;
      case "2":
        rl.close();
        meterEdad();
        console.log(dbConEdad);
        options();
        break;
      case "3":
        rl.close();
        meterEdad();
        filtrarMayores();
        options();
        break;
      case "4":
        rl.close();
        console.log(saludoFinal);
        process.exit(1);
        break;
      default:
        rl.close();
        options();
        break;
    }
  });
};

const main = () => {
  saludoInicial();
  traerDatos();
  options();
};

(() => {
  try {
    main();
  } catch (error) {
    console.log(`░ Se produjo un error: ${error}`);
  }
})();
