const {registerController, loginController} = require("../controllers/users.controller");
const {Router} = require("express");
const router = Router();

router.post("/login", registerController);
router.post("/login-access", loginController);

module.exports = router;