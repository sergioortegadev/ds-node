import { calcular, logsToFront } from "./controller/calcularCLI.js";
(() => {
  try {
    const op = process.argv[3],
      n1 = parseInt(process.argv[2]),
      n2 = parseInt(process.argv[4]),
      showLogs = process.argv[5];

    console.log(calcular(op, n1, n2));

    if (showLogs) logsToFront();
  } catch (error) {
    console.log(error);
  }
})();
