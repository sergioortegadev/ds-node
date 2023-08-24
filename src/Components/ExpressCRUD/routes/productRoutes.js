import express from "express";
const router = express.Router();
import productController from "../controller/productController.js";
import validations from "../middleware/validations.js";

router.get("/", function (req, res) {
  productController.getProd(res);
});

router.get("/:indice", function (req, res) {
  productController.getOneProd(req, res);
});

router.post("/", validations, function (req, res) {
  productController.postProd(req, res);
});

router.put("/:indice", function (req, res) {
  productController.putProd(req, res);
});

router.delete("/:indice", function (req, res) {
  productController.deleteProd(req, res);
});

export default router;
