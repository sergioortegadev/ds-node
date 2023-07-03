import { colorCLI } from "./colorCLI.js";

console.log(
  "\n",
  colorCLI.Bright,
  colorCLI.BgBlue,
  "- - FIZZ BUZZ con do while - -",
  colorCLI.Reset,
  "\n"
);

const fizzbuzz = () => {
  let i = 1;
  do {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(
        colorCLI.FgBlack,
        colorCLI.BgYellow,
        "FIZZBUZZ",
        colorCLI.Reset
      );
    } else if (i % 3 === 0) {
      console.log(colorCLI.FgGreen, colorCLI.BgGray, "FIZZ", colorCLI.Reset);
    } else if (i % 5 === 0) {
      console.log(colorCLI.FgRed, colorCLI.BgGray, "BUZZ", colorCLI.Reset);
    } else console.log(i);

    i++;
  } while (i < 101);
};

fizzbuzz();

console.log(
  "\n",
  colorCLI.Bright,
  colorCLI.BgBlue,
  "- - FIZZ BUZZ con do while Finalizado- -",
  colorCLI.Reset,
  "\n"
);
