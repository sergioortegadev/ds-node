// Suma los dos números más altos ubicados en posiciones contiguas.
// Ejecutar node sumaContinuos.js (utiliza el arreglo: [7, 5, 2, -5, 9, 0, 1, 4, -3, 1])
// Ejecutar node sumaContinuos.js -sort [posiciones] (genera arreglo aleatorio de la cantida de posiciones indicadas)
// Ejecutar node sumaContinuos.js 9 7 5 10 45 30 99 (si ingresamos números separados por espacios los muestra en un arreglo y luego los procesa)

import { colorCLI } from "./colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

let arreglo = [];
let maxSum = -Infinity;

if (process.argv[2] === "-sort") {
  if (process.argv[3] === undefined) {
    console.log(
      `${colorCLI.BgRed}${colorCLI.FgBlack} « Ingresar largo del arreglo después de la palabra -sort » ${colorCLI.Reset}`
    );
    process.exit(1);
  }
  for (let c = 0; c < process.argv[3]; c++) {
    arreglo[c] = Math.round(Math.random() * 10);
  }
}

const regNumbers = /\d/g;
if (regNumbers.test(process.argv[2])) {
  let pos = 2;
  do {
    arreglo[pos - 2] = parseInt(process.argv[pos]);
    pos++;
  } while (process.argv[pos]);
}

if (!process.argv[2]) arreglo = [7, 5, 2, -5, 9, 0, 1, 4, -3, 1];

const sumarContinuos = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] > maxSum) {
      maxSum = arr[i] + arr[i + 1];
    }
  }
  return maxSum;
};
const sumarContinuosMathMax = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    maxSum = Math.max(maxSum, arr[i] + arr[i + 1]);
  }
  return maxSum;
};
const sumarContinuosPos = (arr) => {
  let pos = 0;
  let mayor = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
      pos = i;
    }
  }
  console.log();
  console.log("Posicion del mayor valor: [", pos, "]");
  console.log("Valor mayor: ", mayor);
};

console.log();
console.log("   Arreglo");
console.log(arreglo);
console.log(`${colorCLI.BgYellow}${colorCLI.FgBlack} ▒  Suma  ▒ ${colorCLI.Reset}`);
console.log("Resultado con if : ", sumarContinuos(arreglo));
console.log("Resultado con Math.max() : ", sumarContinuosMathMax(arreglo));
sumarContinuosPos(arreglo);
