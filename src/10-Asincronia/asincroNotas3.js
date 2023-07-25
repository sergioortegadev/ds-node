// Promise.all  es un metodo que captura todas las promesas y las ejecuta simultaneamente. Se combinan y este método devuelve otra promesa. Finaliza en resolve solo si todas las promesas salen exitosas, si una o más da error, va al catch del Promise.all

// Promise.race  captura la primera promesa que tenga respuesta (exito o rechazo). Similar al Promise.all pero no espera a todas.

Promise.race([promesa1, promesa2]).then(
  (value) => {
    console.log(`La promesa ganadora es: ${value}`);
  },
  (reason) => {
    console.log(`La primera promesa en terminar fue rechazada y es: ${reason}`);
  }
);
// Promise.allSettled  recibe varias promesas y nos devuelve un objeto con los resultados. No tiene catch
Promise.allSettled([promesa3, promesa4]).then((result) => result.forEach((res) => console.log(res)));
