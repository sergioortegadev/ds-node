import product from "../model/productModel.js";
import { saveDB } from "../model/productModel.js";

const getProd = (res) => {
  res.status(200).json({
    mensaje: "Base de datos completa de productos",
    product,
  });
};

const getOneProd = (req, res) => {
  const indice = req.params.indice; // captura el indice ingresado por parámetro
  let productSolo = product[indice];

  res.status(200).json({
    mensaje: `Se muestra solo el producto: ${productSolo.prodName}`,
    product: productSolo,
  });
};

const postProd = (req, res) => {
  console.log(req.body);
  // El backend recibe del front estos datos (req), y devuelve el resultado (res) confirmando la acción.

  // Escribe DB en archivo, params: op, req, index, isPost
  saveDB("post", req, false, true);

  res.status(201).json({
    mensaje: `Producto: ${req.body.prodName} CREADO con éxito`, //
    product,
  });
};

const putProd = (req, res) => {
  const indice = req.params.indice; // captura el indice ingresado por parámetro

  // Escribe DB en archivo, params: op, req, index, isPost
  saveDB("put", req, indice, false);

  res.status(201).json({
    mensaje: `Producto: ${product[indice].prodName} ACTUALIZADO`,
    product,
  });
};

const deleteProd = (req, res) => {
  const indice = req.params.indice; // captura el indice ingresado por parámetro
  let prodEliminado = product[indice].prodName;

  // Escribe DB en archivo, params: op, req, index, isPost
  saveDB("delete", req, indice, false);

  res.status(201).json({
    mensaje: `Producto: ${prodEliminado} ELIMINADO!`,
    product,
  });
};

export default { getProd, getOneProd, postProd, putProd, deleteProd };
