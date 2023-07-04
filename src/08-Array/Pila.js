/* Solo referencia a Stack */
let n1 = [7];
let n2 = n1;
console.log(n1[0]); // devuelve 7
console.log(n2[0]); // devuelve 7

n2[0] = 14;
console.log(n1[0]); // devuelve 14
console.log(n2[0]); // devuelve 14

/* Con spreed operator, hace una copia del Stack, nuevo apuntador al Heap */

let n3 = [7];
let n4 = [...n3]; // clona array, a dif del ejemplo anterior donde no clona sino apunta a la misma ref de memoria
console.log(n3[0]); // devuelve 7
console.log(n4[0]); // devuelve 7

n4[0] = 14;
console.log(n3[0]); // devuelve 7, Porque n4 no apuntaba a la ref de memoria de n3
console.log(n4[0]); // devuelve 14
