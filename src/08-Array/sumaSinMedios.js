/* Dado un array de números sumar todos los elementos a excepción del valor del centro.
[1, 2, 3, 4, 5] = 12 (se elimina el 3)
[1, 2, 3, 4, 5, 6] = 14 (se eliminan 3 y 4) */

import { colorCLI } from "./colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

let arreglo = [7, 5, -1, -5, 9, 15, 10, -7];

console.log(arreglo);

const proceso = (arreglo, parOImpar) => {
  let mitad1 = arreglo.slice(0, arreglo.length / 2 - parOImpar);
  let mitad2 = arreglo.slice(-(arreglo.length / 2 - parOImpar));
  console.log("mitades sin centro: ", mitad1, mitad2);
  let suma =
    mitad1.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0) +
    mitad2.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
  console.log(`${colorCLI.BgYellow}${colorCLI.FgBlack} ▒  Suma sin medios: ${suma} ▒ ${colorCLI.Reset}`);
};

if (arreglo.length % 2 === 0) {
  proceso(arreglo, 1);
} else {
  proceso(arreglo, 0);
}
