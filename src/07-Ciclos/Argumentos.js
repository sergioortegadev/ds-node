/*  - - Argumentos - -  */
//console.log(process.argv);

const argumento0 = process.argv[0];
const argumento1 = process.argv[1];
const argumento2 = process.argv[2];
const argumento3 = process.argv[3];

console.log(`1er arg ("node"): ` + argumento0);
console.log(`2do arg ("Argumentos.js"): ` + argumento1);
console.log(`3er arg ("Hola Mundo"): ` + argumento2);
console.log(`4to arg ("123") :` + argumento3);

/*    En consola ingresar: 
node Argumentos.js "Hola Mundo" 123  
*/
