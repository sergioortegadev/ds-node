// El programa elije un numero random (0 a 10). Se ingresan 3 números por parámetros, si coincide lo indica, sino indica el más cercano.

import { colorCLI } from "./colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

// Devolucion profe: que los return de las verificaciones sean con throw o alguna captura de errores. Meter todo el ejercicio en una promesa o captura de error.

const verifications = (p1, p2, p3) => {
  const regFloat = /\.|,/g;
  if (regFloat.test(p1) || regFloat.test(p2) || regFloat.test(p3)) {
    console.log();
    console.log(
      `${colorCLI.Bright}${colorCLI.BgRed} « Solo números ENTEROS» ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
    );
    return false;
  }

  const regNum = /^\d+$/;
  if (!regNum.test(parseInt(p1)) || !regNum.test(parseInt(p2)) || !regNum.test(parseInt(p3))) {
    console.log();
    console.log(
      `${colorCLI.Bright}${colorCLI.BgGray}« No ingresar letras, solo 3 números del 0 al  10 » ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
    );
    return false;
  }

  return [parseInt(p1), parseInt(p2), parseInt(p3)];
};

const main = () => {
  try {
    if (!verifications(process.argv[2], process.argv[3], process.argv[4])) return process.exit(1);

    let input = verifications(process.argv[2], process.argv[3], process.argv[4]);

    const MaqRandom = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    if (input.indexOf(MaqRandom) >= 0) {
      console.log(
        colorCLI.BgGreen,
        colorCLI.FgBlack,
        ` « GANASTE, el número era ${MaqRandom} y está en la posición: ${input.indexOf(MaqRandom)} » `,
        colorCLI.Reset
      );
      return process.exit(1);
    } else {
      let difMenor = Infinity;
      let pos = 0;
      for (let index = 0; index < input.length; index++) {
        if (difMenor > Math.abs(input[index] - MaqRandom)) {
          difMenor = Math.abs(input[index] - MaqRandom);
          pos = index;
        }
      }
      console.log(
        colorCLI.BgBlue,
        colorCLI.FgWhite,
        ` « Ups! casi, el número era el: ${MaqRandom}, y el más cercano fue el ${input[pos]} » `,
        colorCLI.Reset
      );
      return process.exit(1);
    }
  } catch (error) {
    console.log(colorCLI.BgYellow, colorCLI.FgBlack, "▓  Error  ▓", colorCLI.Reset, error);
  }
};

(() => {
  main();
})();
