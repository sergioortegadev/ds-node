import { colorCLI } from "./colorCLI.js";

const calcular = new Promise(function (resolve, reject) {
inValue(number)  {
    if (number % 3 === 0 && number % 5 === 0) {
      resolve(console.log(colorCLI.FgBlack, colorCLI.BgYellow, "FIZZBUZZ", colorCLI.Reset));
    } else if (number % 3 === 0) {
      resolve(console.log(colorCLI.FgGreen, colorCLI.BgGray, "FIZZ", colorCLI.Reset));
    } else if (number % 5 === 0) {
      resolve(console.log(colorCLI.FgRed, colorCLI.BgGray, "BUZZ", colorCLI.Reset));
    } else resolve(console.log(number));
    reject(console.log("error 001"))}
});

const fizzbuzz = (hasta) => {
  console.log("- - FIZZ BUZZ con Promise - -");
  for (let index = 0; index <= hasta; index++) {
    calcular
      .inValue(index)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(`Error inesperado: ${error}`);
      });
  }
  console.log("- - FIZZ BUZZ con Finalizado - -");
};

(() => {
  let parametro = process.argv[2];
  fizzbuzz(parametro);
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
