function middlewares(app, express) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static("src/public"));
}

module.exports = middlewares;
