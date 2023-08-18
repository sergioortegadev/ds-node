import { operaciones, logs } from "../services/operacionesCLI.js";

export const calcular = (op, n1, n2) => {
  switch (op) {
    case "mas":
      return operaciones.sumar(n1, n2);
    case "menos":
      return operaciones.restar(n1, n2);
    case "por":
      return operaciones.multiplicar(n1, n2);
    case "dividido":
      return operaciones.dividir(n1, n2);
  }
};
export const logsToFront = () => {
  let tempArr = logs();
  console.log();
  console.log("   - - -    LOGS REGISTRADOS    - - -  ");
  console.table(tempArr);
};
