// Ordena el arreglo de menor a mayor
// Ejecutar node OrdenarMenorMayor.js (utiliza el arreglo: [7, 5, 2, -5, 9, 0, 1, 4, -3, 1])
// Ejecutar node OrdenarMenorMayor.js -sort  (genera arreglo aleatorio de 10 posiciones)
// Ejecutar node OrdenarMenorMayor.js 9 7 5 10 45 30 99 (si ingresamos números separados por espacios los muestra en un arreglo y luego los ordena)

import { colorCLI } from "../07-Ciclos/colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

let arreglo = [7, 5, 2, -5, 9, 0, 1, 4, -3, 1];

if (process.argv[2] === "-sort") {
  for (let c = 0; c < arreglo.length; c++) {
    arreglo[c] = Math.round(Math.random() * 10);
  }
}

// hacer un for que recorra hasta encontrar undefined, guardar el numero y remplazar el .length
const regNumbers = /\d/g;
if (regNumbers.test(process.argv[2])) {
  let pos = 2;
  arreglo = [];
  do {
    arreglo[pos - 2] = parseInt(process.argv[pos]);

    pos++;
  } while (process.argv[pos]);
}

/* if (regNumbers.test(process.argv[2])) {
  for (let c = 0; c < arreglo.length; c++) {
    if (!process.argv[c + 2] === undefined) {
      arreglo[c] = process.argv[c + 2];
    }
  }
} */

const OrdenarEnArreglo = () => {
  //podría entrar por parámetro aquí
  for (let i = 0; i < arreglo.length; i++) {
    for (let f = 0; f < arreglo.length; f++) {
      if (arreglo[f + 1] < arreglo[f]) {
        let menor = arreglo[f + 1];
        arreglo[f + 1] = arreglo[f];
        arreglo[f] = menor;
      }
    }
  }
};

console.log();
console.log("   Arreglo Original");
console.log(arreglo);
OrdenarEnArreglo();
console.log(`${colorCLI.BgYellow}${colorCLI.FgBlack} ▒ Arreglo Ordenado ▒ ${colorCLI.Reset}`);
console.log(arreglo);
