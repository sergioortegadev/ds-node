// Ordena el arreglo de menor a mayor
import { colorCLI } from "./colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

const arreglo = [7, 5, 2, 5, 9, 0, 1, 0, 3, 1];

const OrdenarEnArreglo = () => {
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
console.log(`${colorCLI.BgBlue} ▒ Arreglo Ordenado ▒${colorCLI.Reset}`);
console.log(arreglo);
