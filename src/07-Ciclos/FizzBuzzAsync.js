import { colorCLI } from "./colorCLI.js";

const calcular = async (number) => {
  try {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FIZZBUZZ";
    } else if (number % 3 === 0) {
      return "FIZZ";
    } else if (number % 5 === 0) {
      return "BUZZ";
    } else {
      return number;
    } // ver abajo otra opción
  } catch (error) {
    console.log("Error : ", error);
  }
};

const fizzbuzz = async (hasta) => {
  console.log("\n", colorCLI.Bright, colorCLI.BgBlue, "- - FIZZ BUZZ con Async Await - -", colorCLI.Reset, "\n");
  for (let index = 0; index <= hasta; index++) {
    let resultado = await calcular(index);
    console.log(resultado);
  }
  console.log("\n", colorCLI.Bright, colorCLI.BgBlue, "- - FIZZ BUZZ Finalizado - -", colorCLI.Reset, "\n");
};

(async () => {
  let parametro = process.argv[2];
  await fizzbuzz(parametro || 100);
})();

// let resultado = console.log("hola"); // demostracion que el "console.log()" no retorna nada. Por eso en esta línea si imprime el "hola", pero no se guarda en la variable "resultado".
// console.log(resultado); // Entonces cuando imprimimos lo que queríamos guardar, no hay nada, "undefined"

/*  - - Opcion del compañero Yamil - -
Esta función recibe parámetros para procesar y retorna una promesa.

function validateNumber(nro, result) {
  return new Promise((resolve, reject) => {
    try {
      let result = "";
      if (nro % 3 === 0) result += "Fizz";
      if (nro % 5 === 0) result += "Buzz";
      resolve(result || nro);
    } catch (error) {
      console.log(error);
    }
  });
}
 */
