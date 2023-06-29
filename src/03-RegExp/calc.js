// Sergio's node calculator
// I present to you my calculator by CLI.
// Here is the documentation:
// run `node calc.js` in the terminal and then request the operation you want to perform (in spanish). Values must be expressed in numbers, not letters. All this between quotation marks ("" or '', not ``), be careful to put the same quotes when opening and closing.
// This program only allows you to do a single operation for each execution, for example: we cannot ask to subtract, and then divide the result. For this reason, if we indicate several operations in the same execution, it will search in this order: addition, subtraction, multiplication and then division.
// If it recognizes any operation, it will show the result, otherwise it will indicate that it is not recognized and will help the user to request it again.
// In the case of addition and multiplication, it will perform the selected operation with all the numbers entered. In case of subtraction, the first one found will be subtracted from the following ones. In case of division, it will do the operation with the first two numbers found, except that the second number is zero.
// Decimals are indicated with a point "." therefore do not use points when writing the order.
import { colorCLI } from "../07-Ciclos/colorCLI.js";

console.log();
if (process.argv.length > 3) {
  console.log(
    "Verifique usar las mismas comillas al inicio y final de todo el parámetro\n - - Vuelva a intentarlo - - "
  );
  process.exit(1);
}

/* - Ingreso datos por parámetro en momento de llamado a ejecución - */

const arg = process.argv[2];
console.log(`Usted ingresó: ${arg}`);

// RegExp
const regSuma = /suma|adicion|adición|sume|\+/gim;
const regResta = /-(?!\d)|restar|resta|resto|resultado|quita|saco|sacamos/gim;
//const regResta = /restar|resta|resto|resulado|quita|saco|sacamos|\-/gim; // reeemplazada
const regMultiplicacion =
  /multiplic|multiplic|multiplic|producto|\*|\sx\s|\dx\d/gim;
const regDivision =
  /dividido|dividir|divide|dividime|divide|dividir|cociente|\//gim;
const regNumeros = /(-?\d+(\.\d+)?)/g;
//const regNumeros = /[\.\d]+(?!\.)/g; // reeemplazada

/*  - - - Operaciones Aritmétricas - - - */
let resultado = 0;
const sumar = (arr) => {
  arr.forEach((element) => {
    resultado += parseFloat(element);
  });
};
const restar = (arr) => {
  resultado = 2 * parseFloat(arr[0]);
  arr.forEach((element) => {
    resultado -= parseFloat(element);
  });
};
const multiplicar = (arr) => {
  resultado = 1;
  arr.forEach((element) => {
    resultado *= parseFloat(element);
  });
};
const dividir = (arr) => {
  if (parseFloat(arr[1]) == 0) {
    return (resultado = "No se puede proceder"), console.log(txtDivCero);
  } else {
    resultado = parseFloat(
      (parseFloat(arr[0]) / parseFloat(arr[1])).toFixed(3)
    );
  }
};
const txtDivCero =
  "Una división en la que el divisor es igual a cero, en aritmética y álgebra, es considerada una «indefinición», y su mal uso puede dar lugar a aparentes paradojas matemáticas.";

const ejecutar = (op) => {
  switch (op) {
    case "suma":
      console.log("+ + Reconoce Suma + +");
      console.log("Se operará con los siguientes números");
      operacion = arg.match(regNumeros);
      console.log(operacion);
      sumar(operacion);
      console.log(
        colorCLI.FgBlack,
        colorCLI.BgYellow,
        `La Suma es: ${resultado}`,
        colorCLI.Reset
      );
      break;
    case "resta":
      console.log("-- Reconoce Resta - -");
      console.log("Al primero se le restarán los demás números");
      operacion = arg.match(regNumeros);
      console.log(operacion);
      restar(operacion);
      console.log(
        colorCLI.FgBlack,
        colorCLI.BgYellow,
        `El resultado es:  ${resultado}`,
        colorCLI.Reset
      );
      break;

    case "multi":
      console.log("* * Reconoce Multiplicacion * *");
      console.log("Se operará con los siguientes números");
      operacion = arg.match(regNumeros);
      console.log(operacion);
      multiplicar(operacion);
      console.log(
        colorCLI.FgBlack,
        colorCLI.BgYellow,
        `El producto es: ${resultado}`,
        colorCLI.Reset
      );
      break;

    case "divi":
      console.log("/ / Reconoce Division / /");
      console.log("Se operará SOLO con los primeros DOS números");
      operacion = arg.match(regNumeros);
      console.log(operacion);
      dividir(operacion);
      if (typeof resultado == "number")
        console.log(
          colorCLI.FgBlack,
          colorCLI.BgYellow,
          `El cociente es: ${resultado}`,
          colorCLI.Reset
        );
      break;

    default:
      break;
  }
};

/* - - - Reconocimiento de operación y ejecución final - - -  */
let operacion;
if (regSuma.test(arg)) {
  ejecutar("suma");
} else if (regResta.test(arg)) {
  ejecutar("resta");
} else if (regMultiplicacion.test(arg)) {
  ejecutar("multi");
} else if (regDivision.test(arg)) {
  ejecutar("divi");
} else {
  console.log(
    "No se reconoció ninguna operación \nPor favor use signos (+ - * /) o palabras más claras: sumar, restar, multiplicar o dividir. \nVolviendo a ejecutar."
  );
}
