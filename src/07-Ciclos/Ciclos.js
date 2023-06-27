// node Ciclos.js [nombre] [edad] [activo: true o false] [password]
let nombre = process.argv[2];
let edad = process.argv[3];
let activo = process.argv[4];
const password = "37";
let passIn = process.argv[5];

console.log();
console.log(`La persona es: ${nombre}`);
console.log(`La edad de la persona es: ${edad}`);
console.log(`El estado de la persona es: ${activo}`);
console.log();

//darle formato con "shift"+"alt"+"F"
if (edad >= 18) {
  if (passIn === password && activo === "true") {
    console.log("Password correcto y Usuario Activo");
  } else {
    console.log("Acceso denegado\nPassword INCORRECTO o Usuario Inactivo");
  }
}
