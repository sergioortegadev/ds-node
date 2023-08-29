import "dotenv/config";
import { readFileSync, writeFileSync } from "fs";

let product = [];

try {
  const raw = readFileSync(process.env.DB, "utf8");

  product = JSON.parse(raw);
} catch (error) {
  throw new Error("▒ en la lectura de los registros ▒");
}
export default product.product; // Exporta el Array, que es valor del key product, en db.json

export const saveDB = (op, req, indice, isPost) => {
  let idMayor;
  let data = {};
  switch (op) {
    case "post":
      // Nuevo id: se recorre la db y se busca el siguiente número
      idMayor = 1;
      product.product.forEach((el) => {
        if (el.id >= idMayor) {
          idMayor = el.id;
        }
      });
      idMayor++;
      // Para que el id quede primero como key
      data = {
        id: idMayor,
        ...req.body,
      };

      product.product.push(data);
      break;
    case "put":
      product.product[indice] = req.body;
      break;
    case "delete":
      product.product.splice(indice, 1);
      break;
    default:
      break;
  }
  //const { product } = data;

  //const time = Date.now();

  let toFile = { product: product.product };
  //console.log(toFile);

  writeFileSync(process.env.DB, JSON.stringify(toFile));
};
