if (!process.argv[2]) {
  console.log("No ingresó número, ingrese valor");
  process.exit(1);
}

const numero = parseInt(process.argv[2]);

if (numero <= 0) {
  console.log("El programa funciona solo con enteros positivos");
  process.exit(1);
}

let intentos = 0;

if (numero === 1 || numero === 2) {
  intentos++;
  console.log(`El número buscado es 1 y lo adiviné en ${intentos}`);
  process.exit(1);
}

let maximo = 2;

do {
  maximo *= 2;
} while (numero > maximo);

let minimo = maximo / 2;

let adivino;
do {
  intentos++;
  let adivino = (minimo + maximo) / 2;
  console.log(`minimo: ${minimo} - maximo: ${maximo} adivino: ${adivino}`);
  if (numero == adivino) {
    console.log(
      `El número buscado es ${adivino} y lo logré en ${intentos} intento`
    );
    break;
    process.exit(1);
  }

  if (numero > adivino) {
    minimo = adivino;
  } else {
    maximo = adivino;
  }
} while (numero !== adivino);
