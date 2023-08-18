import { addLog, sendLog } from "../models/logsCLI.js";

const sumar = (a, b) => {
  let resultado = a + b;
  addLog({ Op: "Sumar", Resultado: resultado });
  return resultado;
};
const restar = (a, b) => {
  let resultado = a - b;
  addLog({ Op: "Restar", Resultado: resultado });
  return resultado;
};
const multiplicar = (a, b) => {
  let resultado = a * b;
  addLog({ Op: "Multiplicar", Resultado: resultado });
  return resultado;
};
const dividir = (a, b) => {
  let resultado = a / b;
  addLog({ Op: "Dividir", Resultado: resultado });
  return resultado;
};

export const operaciones = {
  sumar,
  restar,
  multiplicar,
  dividir,
};
export const logs = () => sendLog();
