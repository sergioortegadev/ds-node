let currentGames = []; //El listado, punto por punto, sin agrupar en set ni otro orden, con denominaciones de number 1 o 2.
let games = []; //Listado de ganadores del game, con denominaciones 'Player 1' o 'Player 2'.
let sets = [];
let board = [];
let winner = false;

const points = [0, 0]; //Donde guardo el marcador, el primer elemento points[0] corresponde al player 1, el segundo al player 2

const playPoint = () => Math.floor(Math.random() * 2) + 1; //Me da los resoltados de cada punto aleatoriamente. Que se pusharán al arreglo "currentGames".
const analizeGame = () => {
  currentGames.forEach((el) => {
    //recorre cada punto, asignando el ganador al marcador "points" en la posición [0] o [1] según el ganador (player 1 o 2)
    if (el === 1) {
      points[0]++;
    } else {
      points[1]++;
    }
  });

  if (points[0] > 5 || points[1] > 5) {
    currentGames = []; //reseteamos currentGames para el siguiente game
    let ganador = points[0] > 5 ? "Player 1" : "Player 2";
    console.log(`${ganador} ganó el Game`);
    games.push(ganador); //Pusheo el ganador del game
    console.log(games);

    points[0] = 0; //reseteamos
    points[1] = 0; //reseteamos
    return analizeSet(); //Llamo para analizar si con este game tenemos ganador del set/partido(match). Me retornará true o false.
  }

  return false;
};

const analizeSet = () => {
  let gamesWinP1 = games.filter((el) => {
    return el === "Player 1";
  });

  let gamesWinP2 = games.filter((el) => {
    return el === "Player 2";
  });

  if (gamesWinP1.length >= 6 || gamesWinP2.length >= 6) {
    let ganador = gamesWinP1.length >= 6 ? "Player 1" : "Player 2";
    console.log(`- - ${ganador} ganó el Set - -`);
    console.log(`Player 1  -  Player 2`);
    console.log("  ", gamesWinP1.length, "     -    ", gamesWinP2.length);
    board.push({ "P1 - P2": [gamesWinP1.length, gamesWinP2.length] });
    games = []; // reseteo marcador de games
    games = []; // reseteo marcador de games
    sets.push(ganador); // Pusheo el ganador del set
    return analizeMatch(); // llamo para analizar si con este set gana el partido
  }

  return false;
};

const analizeMatch = () => {
  let setWinP1 = sets.filter((el) => {
    return el === "Player 1";
  });

  let setWinP2 = sets.filter((el) => {
    return el === "Player 2";
  });
  if (setWinP1.length >= 2 || setWinP2.length >= 2) {
    console.log();
    setWinP1.length >= 2
      ? console.log("▓ ▒ ▓ Player 1 ganó el juego ▓ ▒ ▓")
      : console.log("▓ ▒ ▓ Player 2 ganó el juego ▓ ▒ ▓");

    console.log();

    console.log(`Sets Player 1  -   Sets Player 2`);
    console.log("       ", setWinP1.length, "     -    ", setWinP2.length);

    console.table(board);

    return true;
  }

  return false;
};

const play = (winner) => {
  try {
    if (winner === true) {
      return true;
    }

    currentGames.push(playPoint()); // ejecuta la función que genera puntos aleatoriamente
    winner = analizeGame(); //Será "true" si algún player alcanzó 5 puntos

    // Error a propósito para probar try catch
    /* if (winner === false) {
      throw Error('001 - error inesperado');
    } */

    play(winner); //Recursiva. Se vuelve a repetir hasta que algún jugador logre 5 puntos, o sea que "winner" cambie a true.
  } catch (error) {
    console.log(`▒ ▒ Ha ocurrido un Error: ${error} ▒ ▒`);
  }
};

(function () {
  try {
    play();
  } catch (error) {
    console.log(error);
  }
})();
