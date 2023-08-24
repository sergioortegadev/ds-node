/* import db from "../db/db.json" assert { type: "json" };

export const product = db.product; */

import "dotenv/config";
import { readFileSync, writeFileSync } from "fs";

let product = [];

try {
  const raw = readFileSync(process.env.DB, "utf8");

  product = JSON.parse(raw);
} catch (error) {
  throw new Error("▒ en la lectura de los registros ▒");
}
export default product.product;

export const addLog = (data) => {
  const { product } = data;

  //const time = Date.now();

  let toFile = { product: product };

  writeFileSync(process.env.DB, JSON.stringify(toFile));
};

export const sendProd = () => {
  return product;
};
