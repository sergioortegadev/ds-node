// Ingresar texto por parámetro: node HackerLang.js [texto a traducir a Hacker Lang]

import { colorCLI } from "../07-Ciclos/colorCLI.js"; // Trae los códigos de color, para utilizarlos en la salida de consola.

/*  - Ingreso texto pasado a minúsculas por parámetro, se detiene cuando no encuentra siguiente parámetro -  */
let pos = 2;
let texIn = "";
do {
  texIn += ` ${process.argv[pos].toLowerCase()}`;
  pos++;
} while (process.argv[pos]);

console.log();
console.log(`${colorCLI.BgGray}Texto ingresado: ${texIn}${colorCLI.Reset}`);

/*  - La Conversión la guardo en un objeto -  */
const Alphabet = {
  a: ["4", "/\\", "@", "/-\\", "^", "Д"],
  b: ["I3", "8", "13", "|3", "ß"],
  c: ["[", "¢", "<", "(", "©"],
  d: ["|)", "[)", "I>", "|}", ">"],
  e: ["3", "&", "€", "ë", "[-"],
  f: ["ƒ", "ph", "/=", "v", "|="],
  g: ["6", "C-", "<-", "[,", "(."],
  h: ["]-[", "/-/", "#", ")-(", "1-1"],
  i: ["1", "|", "!", "][", "eye"],
  j: [",_|", "._|", "._]", "_]", ",_]"],
  k: ["|<", "/<", "1<", "|c", "|{"],
  l: ["1", "£", "7", "|_", "|"],
  m: ["/\\/\\", "JVI", "[V]", "|V|", "|\\/|"],
  n: ["|\\|", "/\\/", "[\\]", "|V", "И"],
  o: ["0", "()", "<>", "Ø", "Q"],
  p: ["|*", "|o", "|º", "|^", "|>"],
  q: ["(_,)", "9", "()_", "2", "0_"],
  r: ["Я", "®", "|2", "I2", "lz"],
  s: ["2", "5", "$", "z", "§"],
  t: ["7", "+", "-|-", "][", "†"],
  u: ["(_)", "|_|", "v", "L|", "µ"],
  v: ["\\/", "|/", "\\|", "\\7", "\\_/"],
  w: ["\\/\\/", "VV", "\\^/", "\\V/", "\\X/"],
  x: ["><", "Ж", "}{", "×", ")("],
  y: ["j", "`/", "Ч", "7", "¥"],
  z: ["2", "-/_", "%", ">_", "s"],
  0: ["o"],
  1: ["l"],
  2: ["Z"],
  3: ["E"],
  4: ["A"],
  5: ["S"],
  6: ["b"],
  7: ["T"],
  8: ["B"],
  9: ["g"],
};
/* - Función para obtener un valor random del 0 al 4 - */
const r = () => {
  return Math.round(Math.random() * 4);
};

let arr = texIn.split("");
arr.shift();

let texOut = "";
let char = "";
const regTex = /([a-zA-Z])+/g;
const regNum = /[0-9]/;
arr.forEach((el) => {
  if (regNum.test(el)) {
    char = Alphabet[el][0]; // si es número pongo el primero del alphabet que corresponde con número
  } else if (regTex.test(el)) {
    char = Alphabet[el][r()]; // si es letra busco el arreglo que tiene esa letra en el alphabet y pongo la opción random (posiciones del 0 al 4)
  } else char = el; // si es otra cosa, como un espacio, eñe, acento o un signo; pongo eso directamente
  texOut += char; //voy concatenando en la variable que luego se imprimirá
});
console.log();
console.log(`${colorCLI.BgGreen}${colorCLI.Bright}${texOut}${colorCLI.Reset}`);
