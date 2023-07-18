console.log("Asincronía - Notas");
let nombre = "Sergito";

function funcCualquiera(callBk) {
  // Hacer alguna operación aquí
  console.log("1-Empieza la func Despues");
  let resultado;

  // Una vez que se completa la operación, invocar el callback
  callBk(resultado);

  console.log("2-Posterior a la cb");
  console.log(nombre);

  if (resultado < 0.5) throw Error("- numero 002 - De la CallBack // No continúa después");
}

function laCall(resultado) {
  resultado = Math.random();
  console.log("X-Callback demorada con Resultado: ", resultado);
  nombre = "Sergiaso";
}

(() => {
  try {
    // Pasar la callback como argumento
    funcCualquiera(laCall); // La Callback se pasa SIN EJECUTARSE, sin parentesis
  } catch (error) {
    console.log(`▒ ▒ Ha ocurrido un ${error} ▒ ▒`);
  }
})();

console.log();

/*  - - Promesas - -  */
// Tiene dos momentos, la creación de la promesa y el uso de la misma (con el .then .catch)

const miPromesa = new Promise(function (resolve, reject) {
  // Simulacion op asincrónica
  setTimeout(() => {
    const exito = true;

    if (exito) {
      resolve([
        { id: 1, name: "Sergio" },
        { id: 2, name: "Joaquin" },
      ]); // RESOLVE devuelve UN SOLO valor, puede ser un array u otro objeto, con multiples elementos, pero UNO SOLO.
    } else {
      reject("La operación falló");
    }
  }, 0);
});

// dentro de .then() y .catch() paso funciones "handler"
miPromesa
  .then(function (resultado) {
    console.log(resultado[0].id, " - ", resultado[0].name);
    console.log(resultado[1].id, " - ", resultado[1].name);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log();
// Crear promesa con var de control
const traerUsuarios = new Promise((resolve, reject) => {
  // Usando Variable de control
  const variableDeControl = true;
  if (variableDeControl) {
    resolve("Acá van todos los usarios");
  } else {
    reject("Lo siento, error");
  }
});

// Usar promesa
traerUsuarios.then().catch();

//Crear promesa con try catch
const traerUsTry = new Promise((resolve, reject) => {
  try {
    console.log(" Inicio Promesa traerUsTry ");
    setTimeout(() => {
      resolve([
        { id: 1, name: "Noe" },
        { id: 2, name: "Coco" },
      ]);
    }, 0);
  } catch (error) {
    reject("Lo siento,hay un error");
  }
  console.log(" Fin  traerUsTry ");
});

// Usar promesa try catch
let usuarios;

traerUsTry
  .then((exito) => console.log(exito))
  .then((exito) => {
    usuarios = exito;
    //console.log(exito);
  })
  .catch((err) => console.log(err));

//console.log(usuarios);

console.log();
console.log("- - - - - Promesas Concatenadas, then con return - - - - - -");
// Promesas concatenadas con "returns", que pasan las resulestas al siguiente .then()
const promesaConcat = new Promise((resolve, reject) => {
  try {
    resolve("Promesa resuelta");
  } catch (error) {
    console.log(error);
  }
});

promesaConcat
  .then((respuesta) => {
    console.log("Primer then");
    return `${respuesta}: A`; //este return manda el resultado al siguiente then
  })
  .then((respuesta) => {
    console.log("Segundo then");
    return `${respuesta}: B`; //este return manda el resultado al siguiente then
  })
  .then((respuesta) => {
    console.log("Tercer then");
    console.log(respuesta);
  });
