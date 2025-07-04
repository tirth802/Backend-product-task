const routes = require("express").Router()
const userController = require("../controllers/UserControllers");

routes.get("/user",userController.getUser)
routes.post("/user",userController.signup)
routes.post("/user",userController.addUser)
routes.delete("/user/:id",userController.deleteUser)
routes.get("/user/:id",userController.GetUserById)
routes.post("/user/login",userController.loginUser)

module.exports = routes