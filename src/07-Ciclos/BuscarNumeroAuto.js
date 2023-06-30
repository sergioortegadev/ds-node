import { colorCLI } from "./colorCLI.js";

/* const userLiteral = process.argv[2];
const userN = parseInt(userLiteral); */

let count = 1,
  init = 0,
  mid = 5000,
  end = 10001;

/* const verificaciones = () => {
  if (userN < 0 || userN >= 10001)
    return (
      console.log(),
      console.log(
        `${colorCLI.Bright}${colorCLI.BgGray}« Número Fuera del rango de 0 a 10000 » ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
      ),
      process.exit(1)
    );

  const regFloat = /\.|,/g;
  if (regFloat.test(userLiteral))
    return (
      console.log(),
      console.log(
        `${colorCLI.Bright}${colorCLI.BgCyan}« Solo números ENTEROS del rango de 0 a 10000» ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
      ),
      process.exit(1)
    );

  const regNum = /^\d+$/g;
  if (!regNum.test(userLiteral))
    return (
      console.log(),
      console.log(
        `${colorCLI.Bright}${colorCLI.BgRed}« Solo ingresar números » ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
      ),
      process.exit(1)
    );

  if (process.argv[3])
    return (
      console.log(),
      console.log(
        `${colorCLI.Bright}${colorCLI.BgBlue}« Solo un parámetro, un número del 0 al 10000 » ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
      ),
      process.exit(1)
    );

  if (isNaN(userN) || typeof userN != "number")
    return (
      console.log(),
      console.log(
        `${colorCLI.Bright}${colorCLI.BgGray}« Ingresar solo un número del 0 al 10000 » ${colorCLI.FgYellow}░ ${colorCLI.Bright}PROGRAMA DETENIDO ${colorCLI.FgYellow}░ ${colorCLI.Reset}`
      ),
      process.exit(1)
    );
}; */

/* const imprimir = (n) => {
  switch (n) {
    case 1:
      console.log(),
        console.log(
          `Se encontró el valor de ${userN} en ${colorCLI.BgMagenta}${count} sola vuelta`,
          colorCLI.Reset
        );
      break;

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log(),
        console.log(
          `Se encontró el valor de ${userN} en ${colorCLI.BgGreen}${colorCLI.FgBlack}${count} vueltas`,
          colorCLI.Reset
        );
      break;

    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
      console.log(),
        console.log(
          `Se encontró el valor de ${userN} en ${colorCLI.BgYellow}${colorCLI.FgBlack}${count} vueltas`,
          colorCLI.Reset
        );
      break;

    default:
      console.log(),
        console.log(
          `Se encontró el valor de ${userN} en ${colorCLI.BgRed}${count} vueltas`,
          colorCLI.Reset
        );
      break;
  }
}; */
export const busquedaNumeroAuto = (userN) => {
  //verificaciones();

  while (mid != userN) {
    if (userN < mid) {
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
};

//console.log(busquedaNumeroAuto(1));
let arrEstadisticas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numeros = 0;

for (numeros = 0; numeros < 5; numeros++) {}

function funcEstadisticaPromise(num) {
  return new Promise((resolve, reject) => {
    resolve(busquedaNumeroAuto(num));
  });
}

funcEstadisticaPromise()
  .then((pos) => {
    console.log(pos);
  })
  .catch()
  .finally();

/* async function funcEstadistica() {
  try {
    while (numeros < 5) {
      let pos = await busquedaNumeroAuto(numeros);
      console.log(pos);
      arrEstadisticas[await busquedaNumeroAuto(numeros)]++;
      numeros++;
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.table(arrEstadisticas);
  }
}
funcEstadistica(); */

/* 
 for (numeros = 0; numeros < 5; numeros++) {
      let pos = await busquedaNumeroAuto(numeros);
      console.log(pos);
      arrEstadisticas[pos]++;
      //arrEstadisticas[busquedaNumeroAuto(numeros)]++;

    }
*/
