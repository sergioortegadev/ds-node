//agregar middlewares de validación

const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.js");

router.get("/", productsController.get);
router.get("/:id", productsController.get);
router.post("/", productsController.add);
router.delete("/:id", productsController.del);

module.exports = router;
