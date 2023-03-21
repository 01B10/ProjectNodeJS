const express = require("express");
const sever = require("./api/server");
const middlewares = require("./api/middlewares");
const app = express();
middlewares(app, express);
sever(app);
