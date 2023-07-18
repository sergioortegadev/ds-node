// En un solo arreglo se agregan aleatoriamente los colores, por su inicial en inglés. El arreglo se ordena: 0 Front, (luego sentido horario) 1 Top, 2 right, 3 bottom, 4 left, 5 back.

// Ejemplo en codepen: https://codepen.io/Omelyan/pen/BKmedK

export const Rubik = [
  [
    ["y", "b", "o"],
    ["b", "o", "b"],
    ["b", "y", "o"],
  ],
  [
    ["y", "g", "w"],
    ["w", "b", "w"],
    ["o", "y", "g"],
  ],
  [
    ["w", "g", "b"],
    ["w", "y", "b"],
    ["b", "o", "g"],
  ],
  [
    ["o", "g", "y"],
    ["g", "g", "y"],
    ["y", "y", "w"],
  ],
  [
    ["b", "o", "g"],
    ["w", "w", "o"],
    ["g", "o", "w"],
  ],
  [
    ["r", "r", "r"],
    ["r", "r", "r"],
    ["r", "r", "r"],
  ],
];

/* console.log("Frente - arreglo 0 front");
console.table(Rubik[0]);
console.log("Frente - arreglo 1 top");
console.table(Rubik[1]);
console.log("Frente - arreglo 2 right");
console.table(Rubik[2]);
console.log("Frente - arreglo 3 bottom");
console.table(Rubik[3]);
console.log("Frente - arreglo 4 left");
console.table(Rubik[4]);
console.log("Frente - arreglo 5 back");
console.table(Rubik[5]); */

// Movimientos (siempre teniendo la cara frente de referencia, arreglo pos cero)
export const mover = (parte, direccion, arreglo) => {
  let auxArr = [];
  const traslado = (arreglo, parte, direccion) => {
    switch (parte) {
      case "top":
        if (direccion == "left") {
          auxArr = [arreglo[0][0][0], arreglo[0][0][1], arreglo[0][0][2]];
          [arreglo[0][0][0], arreglo[0][0][1], arreglo[0][0][2]] = [
            arreglo[2][0][0],
            arreglo[2][0][1],
            arreglo[2][0][2],
          ];
          [arreglo[2][0][0], arreglo[2][0][1], arreglo[2][0][2]] = [
            arreglo[5][2][2],
            arreglo[5][2][1],
            arreglo[5][2][0],
          ];
          [arreglo[5][2][2], arreglo[5][2][1], arreglo[5][2][0]] = [
            arreglo[4][0][0],
            arreglo[4][0][1],
            arreglo[4][0][2],
          ];
          [arreglo[4][0][0], arreglo[4][0][1], arreglo[4][0][2]] = auxArr;
          // Rotar cara
          auxArr = [arreglo[1][0][0], arreglo[1][0][1], arreglo[1][0][2]];
          [arreglo[1][0][0], arreglo[1][0][1], arreglo[1][0][2]] = [
            arreglo[1][2][0],
            arreglo[1][1][0],
            arreglo[1][0][0],
          ];
          [arreglo[1][0][0], arreglo[1][1][0], arreglo[1][2][0]] = [
            arreglo[1][2][0],
            arreglo[1][2][1],
            arreglo[1][2][2],
          ];
          [arreglo[1][2][0], arreglo[1][2][1], arreglo[1][2][2]] = [
            arreglo[1][2][2],
            arreglo[1][1][2],
            arreglo[1][0][2],
          ];
          [arreglo[1][0][2], arreglo[1][1][2], arreglo[1][2][2]] = auxArr;
        } else {
        }
        /* console.log("- - Modificado - -");
        console.log("- - Front - -");
        console.table(arreglo[0]);
        console.log("- - Top - -");
        console.table(arreglo[1]);
        console.log("- - Right - -");
        console.table(arreglo[2]);
        console.log("- - Bottom - -");
        console.table(arreglo[3]);
        console.log("- - Left - -");
        console.table(arreglo[4]);
        console.log("- - Back - -");
        console.table(arreglo[5]); */
        break;

      default:
        break;
    }
  };
  switch (parte) {
    case "top":
      switch (direccion) {
        case "left":
          console.log("mover arriba hacia izquierda");
          traslado(arreglo, parte, direccion);
          break;
        case "right":
          console.log("mover arriba hacia derecha");

          break;
        default:
          break;
      }
      break;

    case "right":
      switch (direccion) {
        case "up":
          console.log("mover derecha hacia arriba");

          break;
        case "down":
          console.log("mover derecha hacia abajo");

          break;
        default:
          break;
      }
      break;

    case "bottom":
      switch (direccion) {
        case "left":
          console.log("mover abajo hacia izquierda");

          break;
        case "right":
          console.log("mover abajo hacia derecha");

          break;
        default:
          break;
      }
      break;

    case "left":
      switch (direccion) {
        case "up":
          console.log("mover izquierda hacia arriba");
          traslado(arreglo, parte, direccion);
          break;
        case "down":
          console.log("mover izquierda hacia abajo");

          break;
        default:
          break;
      }
      break;

    default:
      break;
  }
};

// mover("top", "left", Rubik);
