console.log("- - - Notas Array - - - ");

const array1 = [1, "2", true, [1, 2, 3], Infinity];

// Filter - necesita return
const arrayFilter = array1.filter((el) => {
  return typeof el === "number";
});
console.log(arrayFilter);

const array2 = [4, 8, 15, 16, 23, 42, "player 1", "player 2", "player 1", "player 1"];

// Reduce - necesita return y valor inicial
const arrayAcumulador = array2.reduce((acum, el) => {
  if (typeof el === "number") {
    acum += el;
  }
  return acum;
}, 1000); //valor inicial del acumulador

console.log("Acumulador: ", arrayAcumulador);

const array3 = ["player 1", "player 2", "player 1", "player 1", "player 1", "player 2"];

// map - necesita return
const arrayAcumSets = array3.map((el) => {
  if (el === "player 1") return 1;
  if (el === "player 2") return 2;
});

console.log("Sets Ganados por cada uno :", arrayAcumSets);
