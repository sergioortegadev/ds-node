//import { colorCLI } from "./colorCLI.js";

const calcular = (number) =>
  new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) {
      resolve("FIZZBUZZ");
    } else if (number % 3 === 0) {
      resolve("FIZZ");
    } else if (number % 5 === 0) {
      resolve("BUZZ");
    } else resolve(number);
    reject("error 001");
  });

const fizzbuzz = (hasta) => {
  console.log("- - FIZZ BUZZ con Promise - -");
  for (let index = 1; index <= hasta; index++) {
    calcular(index)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(`Error inesperado: ${error}`);
      });
  }
  setTimeout(() => {
    console.log("- - FIZZ BUZZ con Promise FINALIZADO- -");
  }, 0);
};

(() => {
  let parametro = process.argv[2];
  fizzbuzz(parametro || 100);
})();
