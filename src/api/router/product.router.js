const express = require("express");
const {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/products.controller");

const router = express.Router();

router.get("/products", getProduct);

router.get("/products/:id", getProductById);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

module.exports = router;
