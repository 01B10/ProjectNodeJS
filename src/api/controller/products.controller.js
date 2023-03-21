const books = require("../model/data");
const { inputRequire } = require("../validations");
const getProduct = (req, res) => {
  res.send({
    message: "success",
    data: books,
  });
  res.end();
};

const getProductById = (req, res) => {
  const id = req.params.id;
  const book = books.find((item) => item.id == id);
  if (book) {
    res.send({
      message: "success",
      data: book,
    });
  } else {
    res.status(404).send("Sản phẩm không tồn tại");
  }
  res.end();
};

const createProduct = (req, res) => {
  try {
    const data = req.body;
    const { error } = inputRequire(data);
    if (error) {
      res.status(400).send({
        message: error.details?.map((e) => e.message),
      });
      res.end();
    } else {
      books.push(data);
      res.send(books);
      res.end();
    }
  } catch (err) {
    res.status(500).end({
      message: err,
    });
  }
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const bookIndex = books.findIndex((item) => item.id == id);
  console.log(data);
  if (bookIndex >= 0) {
    books[bookIndex] = { ...books[bookIndex], ...data };
    res.send(books[bookIndex]);
  } else {
    res.status(404).send("Sản phẩm không tồn tại");
  }
};

const deleteProduct = (req, res) => {
  try {
    const id = req.params.id;
    const productIndex = books.findIndex((item) => item.id == id);
    if (productIndex >= 0) {
      books.splice(productIndex, 1);
      res.json(books);
      res.end();
    } else {
      res.status(400).send("Sản phẩm không tồn tại!");
    }
  } catch (error) {
    res.status(500).send({
      message: "Lỗi server",
    });
    res.end();
  }
};

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
