const {
  registerController,
  loginController,
  getUsersController,
  updateRolController,
  validateDentistProfileC
} = require("../controllers/users.controller");
const { Router } = require("express");
const router = Router();

router.post("/login", registerController);
router.post("/login-access", loginController);
router.post("/get-user", getUsersController);
router.post("/update-rol", updateRolController);
router.post("/validate-dentist", validateDentistProfileC);

module.exports = router;
