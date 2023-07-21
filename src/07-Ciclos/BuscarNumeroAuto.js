import { colorCLI } from "./colorCLI.js";

let count = 1,
  init = 0,
  mid = 5000,
  end = 10001;

let arrEstadisticas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numeros = 0;

async function busquedaNumeroAutoAsync(numero) {
  while (mid != numero) {
    if (numero < mid) {
      end = mid;
      mid = init + (end - init) / 2;
    } else {
      // (userN > mid)
      init = mid;
      mid = init + (end - init) / 2;
    }
    mid = Math.floor(mid);
    count++;
    if (count > 1_000_000)
      return (
        console.log(""),
        console.log(
          ` ${colorCLI.FgWhite}${colorCLI.BgRed}« Se superó el millón de Ciclos » ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
        )
      );
  }
  return count;
}
//console.log(await busquedaNumeroAutoAsync(7500));

async function estadisticaNumeros() {
  try {
    for (numeros = 0; numeros < 5; numeros++) {
      // ver si el for u otro ciclo espera con await para pasar al otro numero
      let pos = await busquedaNumeroAutoAsync(numeros);
      console.log(pos);
      arrEstadisticas[pos]++;
    }
    console.table(arrEstadisticas);
  } catch (error) {
    console.log(error);
  }
}
estadisticaNumeros();
