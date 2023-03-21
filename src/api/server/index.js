const products = require("../router/product.router");
const uploadImage = require("../router/image");

function sever(app) {
  app.use("/", products);
  app.use("/", uploadImage);
  app.listen(8000, () => {
    console.log("Server is running");
  });
}

module.exports = sever;
