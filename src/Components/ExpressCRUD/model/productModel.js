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

export const saveDB = (data, isPost) => {
  //const { product } = data;

  //const time = Date.now();

  let toFile = { product: data };
  //console.log(toFile);

  writeFileSync(process.env.DB, JSON.stringify(toFile));
};
