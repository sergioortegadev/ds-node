// Busca el número mayor en un arreglo
import { colorCLI } from "./colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

const arreglo = [7, 5, 2, 5, 9, 0, 1, 0, 3, 1];

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
