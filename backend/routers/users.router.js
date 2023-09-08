const {verifyToken, checkUserRole} = require('../middlewares/authMiddleware')

const {
  registerController,
  loginController,
  getUsersController,
  updateRolController,
} = require("../controllers/users.controller");
const { Router } = require("express");
const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);

//Rol Admin
router.get("/users", verifyToken, checkUserRole(["ADM"]), getUsersController);
router.post("/users/:id", verifyToken, checkUserRole(["ADM"]) ,updateRolController);

module.exports = router;
