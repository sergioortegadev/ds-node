const sumar = (a, b, ...c) => {
  let resultado = a + b;
  c.forEach((el) => {
    resultado += el;
  });
  return resultado;
};

const restar = (a, b, ...c) => {
  let resultado = a - b;
  c.forEach((el) => {
    resultado -= el;
  });
  return resultado;
};

const dividir = (a, b) => {
  if (b === 0) throw new Error(" ▒ Division por cero ▒");
  return a / b;
};
const multiplicar = (a, b, ...c) => {
  let resultado = a * b;
  c.forEach((el) => {
    resultado *= el;
  });
  return resultado;
};
const modulo = (a, b) => a % b;

export const calculadora = {
  sumar,
  restar,
  dividir,
  multiplicar,
  modulo,
};
