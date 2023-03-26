const express = require("express");
const ProductRouter = require("./product");
const UserRouter = require("./user");

const RootRouter = express.Router();

RootRouter.use("/product", ProductRouter);
RootRouter.use("/user", UserRouter);

module.exports = RootRouter;
