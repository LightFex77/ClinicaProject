const {
  registerController,
  loginController,
  getUsersController,
  updateRolController,
} = require("../controllers/users.controller");
const { Router } = require("express");
const router = Router();

router.post("/login", registerController);
router.post("/login-access", loginController);
router.post("/get-user", getUsersController);
router.post("/update-rol", updateRolController);

module.exports = router;
