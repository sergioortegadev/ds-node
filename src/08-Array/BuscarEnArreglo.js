// Busca el número mayor en un arreglo
// Ejecutar node BuscarEnArreglo.js (utiliza el arreglo: [7, 5, 2, 5, 9, 0, 1, 0, 3, 1])
// Ejecutar node BuscarEnArreglo.js -sort  (genera arreglo aleatorio de 10 posiciones)
// Ejecutar node BuscarEnArreglo.js 9 7 5 10 45 30 99 (si ingresamos números separados por espacios los muestra en un arreglo y busca el mayor)

import { colorCLI } from "../07-Ciclos/colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

let arreglo = [7, 5, 2, 5, 9, 0, 1, 0, 3, 1];

if (process.argv[2] === "-sort") {
  for (let c = 0; c < arreglo.length; c++) {
    arreglo[c] = Math.round(Math.random() * 10);
  }
}

const regNumbers = /\d/g;
if (regNumbers.test(process.argv[2])) {
  let pos = 2;
  arreglo = [];
  do {
    arreglo[pos - 2] = parseInt(process.argv[pos]);
    pos++;
  } while (process.argv[pos]);
}

let mayor = arreglo[0];
const buscarEnArreglo = () => {
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
};

console.log("Arreglo Original");
console.log(arreglo);
buscarEnArreglo();
console.log(),
  console.log(
    `${colorCLI.BgBlue}El valor más álto es: ${mayor}`,
    colorCLI.Reset
  );
