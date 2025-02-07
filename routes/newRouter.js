const { Router } = require("express");
const { newController, newPostController } = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", newController);
newRouter.post("/", newPostController);

module.exports = newRouter;
