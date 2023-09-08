const {createProfileDentistC, checkDentistProfile} = require("../controllers/dentist.controller");
const {verifyToken, checkUserRole} = require('../middlewares/authMiddleware');

const { Router } = require("express");
const router = Router();

router.post("/dentists", verifyToken, checkUserRole(["ODT"]) , createProfileDentistC);
router.post('/verify-dentist-profile', verifyToken, checkDentistProfile);

module.exports = router;