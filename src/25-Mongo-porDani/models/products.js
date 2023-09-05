const mongoose = require("../config/mongo");
const ObjectId = mongoose.Types.ObjectId;

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model("Products", productSchema);

async function add(data) {
  try {
    const newProduct = new Product(data);
    newProduct.save();
    return newProduct;
  } catch (error) {
    throw `imposible insertar: ${error}`;
  }
}

async function get(id) {
  try {
    const filter = id ? new ObjectId(id) : {};
    const products = await Product.find(filter);

    return products;
  } catch (error) {
    throw `imposible retornar ${error}`;
  }
}

async function del(id) {
  try {
    const products = await Product.findByIdAndRemove(id);
    return true;
  } catch (error) {
    throw `imposible retornar ${error}`;
  }
}

module.exports = { add, get, del };
