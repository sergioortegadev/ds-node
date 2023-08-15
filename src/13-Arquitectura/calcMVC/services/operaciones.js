import { addLog, sendLog } from "../models/sessionLogs.js";

const sumar = (a, b, ...c) => {
  let resultado = a + b;
  c.forEach((el) => {
    resultado += el;
  });
  addLog({ Op: "Sumar", Resultado: resultado });
  return resultado;
};
const restar = (a, b, ...c) => {
  let resultado = a - b;
  c.forEach((el) => {
    resultado -= el;
  });
  addLog({ Op: "Restar", Resultado: resultado });
  return resultado;
};
const multiplicar = (a, b, ...c) => {
  let resultado = a * b;
  c.forEach((el) => {
    resultado *= el;
  });
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
