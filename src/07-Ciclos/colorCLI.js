export const colorCLI = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  FgGray: "\x1b[90m",
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
  BgGray: "\x1b[100m",
};
//  En otro archivo importar así
// import { colorCLI } from "./colorCLI.js";

/* -- -- USO Con Objeto Importado -- -- 
console.log(`${colorCLI.FgBlack}${colorCLI.BgYellow}TEXTO NEGRO fondo amarillo`);
console.log(colorCLI.Reset);

   - -  USO Con variables - - 
   Color front  + %s  + Color BackGround     Luego Coma "," y el texto
   Example:  console.log(FgGreen + "%s" + BgWhite, "Texto coloreado" + hora); 
   
   - -  USO Con Códigos de color - -
   Example: console.log("\x1b[36m%s\x1b[0m", "▒ ▒ COLOR CYAN ▒ ▒");*/

/*  Other examples
console.log(FgBlue, "Segundo a segundo...: ");
console.log("\x1b[33m%s\x1b30m", "Segundo a segundo...: ");
console.log(Reset, "Texto común");
console.log("\x1b[100m%s\x1b[0m", " Hola ");
console.log("Texto Normalizado");
console.log("\x1b[36m%s\x1b[0m", "▒ ▒ COLOR CYAN ▒ ▒");
 */

/* 
Las definiciones otra vez en variables let

let Reset = "\x1b[0m",
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Underscore = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
  FgBlack = "\x1b[30m",
  FgRed = "\x1b[31m",
  FgGreen = "\x1b[32m",
  FgYellow = "\x1b[33m",
  FgBlue = "\x1b[34m",
  FgMagenta = "\x1b[35m",
  FgCyan = "\x1b[36m",
  FgWhite = "\x1b[37m",
  FgGray = "\x1b[90m",
  BgBlack = "\x1b[40m",
  BgRed = "\x1b[41m",
  BgGreen = "\x1b[42m",
  BgYellow = "\x1b[43m",
  BgBlue = "\x1b[44m",
  BgMagenta = "\x1b[45m",
  BgCyan = "\x1b[46m",
  BgWhite = "\x1b[47m",
  BgGray = "\x1b[100m"; */
