import { colorCLI } from "./colorCLI.js";

console.log(
  "\n",
  colorCLI.Bright,
  colorCLI.BgBlue,
  "- - FIZZ BUZZ con for - -",
  colorCLI.Reset,
  "\n"
);

const fizzbuzz = () => {
  for (let index = 1; index < 101; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(
        colorCLI.FgBlack,
        colorCLI.BgYellow,
        "FIZZBUZZ",
        colorCLI.Reset
      );
    } else if (index % 3 === 0) {
      console.log(colorCLI.FgGreen, colorCLI.BgGray, "FIZZ", colorCLI.Reset);
    } else if (index % 5 === 0) {
      console.log(colorCLI.FgRed, colorCLI.BgGray, "BUZZ", colorCLI.Reset);
    } else console.log(index);
  }
};

fizzbuzz();

console.log(
  "\n",
  colorCLI.Bright,
  colorCLI.BgBlue,
  "- - FIZZ BUZZ con for Finalizado - -",
  colorCLI.Reset,
  "\n"
);
