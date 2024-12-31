const express = require("express");
const IndexController = require("../controllers/index");

const router = express.Router();
const indexController = new IndexController();

router.get("/", (req, res) => indexController.getIndex(req, res));

const setRoutes = (app) => {
  app.use("/", router);
};

module.exports = { setRoutes };
