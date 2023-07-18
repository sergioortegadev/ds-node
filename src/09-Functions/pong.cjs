const readline = require("readline-sync");
const Points = [0, 15, 30, 40, "Ventaja", "Set Ganado"];
let end = false;

const User = {
  count: 0,
  games: 0,
  sets: 0,
  position: 2,
};
const Maq = {
  count: 0,
  games: 0,
  sets: 0,
  position: 2,
};
let saque = "la máquina";

const analizeSets = () => {
  console.log();
  console.log("- Game finalizado -");
  if (User.count > Maq.count) {
    console.log(`- - Game para el Usuario - -`);
    User.games++;
  } else {
    console.log(`- - Game para la máquina - -`);
    Maq.games++;
  }

  console.log(" Jugador  -  Máquina");
  console.log(`  ${User.games} games - ${Maq.games} sets`);

  User.count = 0; // reseteos
  Maq.count = 0; // reseteos
  console.log("= = Cambio de saque = = =");
  saque === "la máquina" ? (saque = "el usuario") : (saque = "la máquina");
  console.log();
  if (User.games >= 3 || Maq.games >= 3) {
    User.games >= 3 ? console.log("Usuario Ganador") : console.log("Maquina ganadora");
    console.log(`= = Juego Finalizado = =`);
    return true;
  }
};

const pong = (end) => {
  try {
    if (end === true) {
      return true;
    }
    console.log();
    console.log("- - - Juego - - - ");

    const pongJugar = (saca) => {
      console.log(`- Saca ${saca} - `);
      let dirPelota = 0;

      switch (saca) {
        case "la máquina":
          User.position = readline.questionInt("Ingresa la posicion elegida para recibir: ");

          do {
            dirPelota = Math.floor(Math.random() * 3 + 1);
            console.log("Pelota hacia :", dirPelota);
            if (User.position != dirPelota) return console.log("punto para la máquina"), pongPunto(Maq, User);

            console.log("golpe bien respondido");
            dirPelota = Math.floor(Math.random() * 3 + 1);
            Maq.position = Math.floor(Math.random() * 3 + 1);
            if (Maq.position != dirPelota) return console.log("punto para el usuario"), pongPunto(User, Maq);
          } while (Maq.position == dirPelota);

          break;

        case "el usuario":
          User.position = readline.questionInt("Ingresa hacia donde va la pelota: ");

          do {
            Maq.position = Math.floor(Math.random() * 3 + 1);
            console.log("Maquina ubicada en: ", Maq.position);
            if (Maq.position != User.position) return console.log("punto para el usuario"), pongPunto(User, Maq);

            console.log("golpe bien respondido");
            User.position = readline.questionInt("Ingresa la posicion elegida para responder: ");
            Maq.position = Math.floor(Math.random() * 3 + 1);
            console.log("Máquina ubicada en: ", Maq.position);

            if (User.position != Maq.position) return console.log("punto para el usuario"), pongPunto(User, Maq);
          } while (Maq.position == dirPelota);

          break;

        default:
          break;
      }
    };

    const pongPunto = (playerSuma, playerNoSuma) => {
      if (playerSuma.count < 3 || playerSuma.count == 4) {
        playerSuma.count++;
      } else {
        if (playerSuma.count == 3) {
          if (playerNoSuma.count < 3) {
            playerSuma.count++;
            playerSuma.count++;
          } else {
            if (playerNoSuma.count == 3) {
              playerSuma.count++;
            } else {
              playerNoSuma.count--;
              playerSuma.count++;
            }
          }
        } else {
          playerSuma.count++;
        }
      }
      console.log(" El partido va");
      console.log(" Usuario: ", Points[User.count]);
      console.log(" Maquina: ", Points[Maq.count]);
      console.log();
    };

    do {
      pongJugar(saque);
    } while (User.count < 5 && Maq.count < 5);

    end = analizeSets();
    pong(end);
  } catch (error) {
    console.log(`▒ ▒ Ha ocurrido un Error: ${error} ▒ ▒`);
  }
};

(function () {
  try {
    let reiniciar;
    do {
      pong(end);
      reiniciar = readline.question("Quiere volver a Jugar? 's' o 'n' ");
    } while (reiniciar == "s");
  } catch (error) {
    console.log(`▒ ▒ Ha ocurrido un Error: ${error} ▒ ▒`);
  }
})();

// Abstraer la logica de quien saca
// Hacer que ande en front
// Mecanica de juego, que al responder bien se siga peloteando
// que los return no tengas más de una orden, si hay que hacer un console log, que se haga antes
