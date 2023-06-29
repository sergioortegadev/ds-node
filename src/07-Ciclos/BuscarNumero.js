import { colorCLI } from "./colorCLI.js";

const userN = process.argv[2];

let count = 1,
  init = 0,
  mid = 5000,
  end = 10000;
const busquedaNumero = () => {
  while (mid != userN) {
    if (mid > userN) {
      end /= 2;
      mid /= 2;
    } else if (mid < userN) {
      init = init + (end - init) / 2;
      mid = init + (end - init) / 2;
    } else mid = Math.floor(mid);
    count++;
  }
  return console.log(
    colorCLI.FgBlack,
    colorCLI.BgYellow,
    `Se encontró el valor de ${userN} en ${count} vueltas`,
    colorCLI.Reset
  );
};
busquedaNumero();
