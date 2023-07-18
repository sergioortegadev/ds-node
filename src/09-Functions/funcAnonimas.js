(function () {
  console.log("Hola mundo, func anonimas autoejecutable apenas se define");
})();
(() => {
  console.log("Hola mundo, arrow func anonimas");
})();
((nombre) => {
  console.log(`Hola ${nombre}, arrow func anonima con parámetro`);
})("Sergio");

const factorial = (n) => {
  console.log(n);
  if (n == 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
