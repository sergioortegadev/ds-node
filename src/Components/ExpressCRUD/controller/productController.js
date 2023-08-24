import product from "../model/productModel.js";

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
  // El backend recibe del front estos datos (req), y devuelve el resultado (res) confirmando la acción.
  product.push(req.body);
  //console.log(req.body);

  res.status(201).json({
    mensaje: `Producto: ${req.body.prodName} CREADO con éxito`, //
    product,
  });
};

const putProd = (req, res) => {
  const indice = req.params.indice; // captura el indice ingresado por parámetro
  product[indice] = req.body;

  res.status(200).json({
    mensaje: `Producto: ${product[indice].prodName} ACTUALIZADO`,
    product,
  });
};

const deleteProd = (req, res) => {
  const indice = req.params.indice; // captura el indice ingresado por parámetro
  let prodEliminado = product[indice].prodName;
  product.splice(indice, 1);

  res.status(200).json({
    mensaje: `Producto: ${prodEliminado} ELIMINADO!`,
    product,
  });
};

export default { getProd, getOneProd, postProd, putProd, deleteProd };
