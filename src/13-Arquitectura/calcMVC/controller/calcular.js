import { operaciones, logs } from "../services/operaciones.js";

export const calcular = (op, n1, n2) => {
  switch (op) {
    case "+":
      return operaciones.sumar(n1, n2);
    case "-":
      return operaciones.restar(n1, n2);
    case "x":
      return operaciones.multiplicar(n1, n2);
    case "/":
      return operaciones.dividir(n1, n2);
  }
};
export const logsToFront = () => {
  let tempArr = logs();
  console.table(tempArr);
  let logsText = "";
  tempArr.forEach((el) => {
    logsText += `${JSON.stringify(el)}\n`;
  });
  return logsText;
};
