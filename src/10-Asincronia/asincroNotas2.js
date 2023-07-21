import { colorCLI } from "./colorCLI.js";

const URL = "https://backend-node-json-server.onrender.com/directores";

// Asincronía con promesas, objeto promise
const directoresPromise = new Promise((resolve, reject) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch((err) => {
      reject(console.log(colorCLI.FgRed, `▓ Error inesperado: ${err} ▓`, colorCLI.Reset));
    });
});
directoresPromise
  .then((datosObtenidos) => {
    console.log(colorCLI.FgGreen, "- - Fetch con objeto promise - -", colorCLI.Reset);
    console.log("El primer registro es: ", datosObtenidos[0].nombre), console.log("Sus películas son: ");
    listarPelis(datosObtenidos[0].peliculas);
  })
  .catch((errorObtenido) => console.log(`El error fue: ${errorObtenido}`));

// async await

async function directoresAsync() {
  try {
    const res = await fetch(URL);
    const datass = await res.json();
    return datass;
  } catch (error) {
    throw Error(console.log(colorCLI.FgRed, `▓ Error inesperado: ${error} ▓`, colorCLI.Reset));
  }
}

async function mostrarDirectoresAsync() {
  try {
    const dataso = await directoresAsync();
    console.log(colorCLI.FgMagenta, "- - Fetch con ASYNC & AWAIT - -", colorCLI.Reset);
    console.log(colorCLI.FgGreen, "El segundo registro es: ", dataso[1].nombre, colorCLI.Reset),
      console.log(colorCLI.Bright, "Sus películas son: ", colorCLI.Reset);
    listarPelis(dataso[1].peliculas);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

mostrarDirectoresAsync();

function listarPelis(dataso) {
  dataso.forEach((peli) => {
    console.log(`Película: ${peli}`);
  });
}

// La palabra clave "async" convierte la función de sincrona a ASINCRONA, retornando una promesa. En el primer log no usamos "await" y vemos que arroja la Promise{}
async function hola2() {
  return "hola2";
}
console.log(hola2()); // Promise{"hola2"}
console.log(await hola2()); // hola2
