const productModel = require("../models/products");

const get = async (req, res) => {
  try {
    const { id } = req.params;
    products = await productModel.get(id);
    return res.status(200).json({ msj: "todos los productos", products: products });
  } catch (error) {
    return res.status(500).json({ msj: "error inesperado" });
  }
};

const add = async (req, res) => {
  try {
    let product = await productModel.add(req.body);
    return res.status(201).json({ product });
  } catch (error) {}
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    products = await productModel.del(id);
    return res.status(204).json({ msj: "ok" });
  } catch (error) {
    return res.status(500).json({ msj: "error inesperado" });
  }
};

module.exports = { add, get, del };
