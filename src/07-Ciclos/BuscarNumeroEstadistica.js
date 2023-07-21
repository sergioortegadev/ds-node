//El programa debe buscar números en ciclos, la función "busquedaNumeroAutoAsync" realiza esa búsqueda y devuelve entre 1 y 14, porque el número 5000 lo encuentra en 1 ciclo, y los que más demora los encuentra en 14 ciclos. La idea es hacer una estadística de cual es la cantidad de ciclos más frecuente.

let count = 1,
  init = 0,
  mid = 5000,
  end = 10001;

let arrEstadisticas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // En este arreglo quiero guardar la cantidad de ciclos por cada número buscado, en las posiciones.
let numeros = 0;

async function busquedaNumeroAutoAsync(numero) {
  while (mid != numero) {
    if (numero < mid) {
      end = mid;
      mid = init + (end - init) / 2;
    } else {
      // (userN > mid)
      init = mid;
      mid = init + (end - init) / 2;
    }
    mid = Math.floor(mid);
    count++;
    if (count > 1_000_000) return console.log(" « Se superó el millón de Ciclos » PROGRAMA DETENIDO ");
  }
  return count;
}

//si ejecuto la siguiente línea me muestra los ciclos que le demora encontrar el número cero. esto demuestra que la funcion asíncrona funciona.
//console.log(await busquedaNumeroAutoAsync(0));

async function estadisticaNumeros() {
  try {
    for (numeros = 0; numeros < 5; numeros++) {
      // Si funciona debería recorrer hasta la variable end (10001)
      let pos = await busquedaNumeroAutoAsync(numeros);
      console.log(pos);
      arrEstadisticas[pos]++;
    }
    console.table(arrEstadisticas);
  } catch (error) {
    console.log(error);
  }
}
estadisticaNumeros();
