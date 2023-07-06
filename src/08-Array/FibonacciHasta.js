// Ingresar valor por parámetro: node FibonacciHasta.js [número longitud arreglo]

import { colorCLI } from "../07-Ciclos/colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

let hasta = parseInt(process.argv[2]);

const regExp = /\d/g;
if (!regExp.test(hasta) || hasta <= 2) {
  console.log();
  console.log(`${colorCLI.BgRed}« Ingresar número entero mayor o igual a 3 »${colorCLI.Reset}`);
  process.exit(1);
}

let arrFibo = [0, 1];
for (let i = 2; i < hasta; i++) {
  arrFibo[i] = arrFibo[i - 2] + arrFibo[i - 1];
}

console.log();
console.log(`Secuencia Fibonacci de ${hasta} valores`);
console.log(colorCLI.BgBlue, colorCLI.FgWhite, arrFibo, colorCLI.Reset);
