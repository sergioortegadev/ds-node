import { colorCLI } from "./colorCLI.js";

const calcular = async (number) => {
  try {
    if (number % 3 === 0 && number % 5 === 0) {
      return console.log(colorCLI.FgBlack, colorCLI.BgYellow, "FIZZBUZZ", colorCLI.Reset);
    } else if (number % 3 === 0) {
      return console.log(colorCLI.FgGreen, colorCLI.BgGray, "FIZZ", colorCLI.Reset);
    } else if (number % 5 === 0) {
      return console.log(colorCLI.FgRed, colorCLI.BgGray, "BUZZ", colorCLI.Reset);
    } else console.log(number);
  } catch (error) {
    console.log("Error : ", error);
  }
};

const fizzbuzz = async (hasta) => {
  console.log("\n", colorCLI.Bright, colorCLI.BgBlue, "- - FIZZ BUZZ con Async Await - -", colorCLI.Reset, "\n");
  for (let index = 0; index <= hasta; index++) {
    await calcular(index);
  }
  console.log("\n", colorCLI.Bright, colorCLI.BgBlue, "- - FIZZ BUZZ con Finalizado - -", colorCLI.Reset, "\n");
};

(async () => {
  let parametro = process.argv[2];
  await fizzbuzz(parametro);
})();

/* 
  switch (number) {
      case number % 3 === 0 && number % 5 === 0:
        console.log(colorCLI.FgBlack, colorCLI.BgYellow, "FIZZBUZZ", colorCLI.Reset);
        break;
      case number % 3 === 0:
        console.log(colorCLI.FgGreen, colorCLI.BgGray, "FIZZ", colorCLI.Reset);
        break;
      case number % 5 === 0:
        console.log(colorCLI.FgRed, colorCLI.BgGray, "BUZZ", colorCLI.Reset);
        break;

      default:
        console.log(number);
        break;
    }
*/
