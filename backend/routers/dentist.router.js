const {createProfileDentistC, checkDentistProfile} = require("../controllers/dentist.controller");

const { Router } = require("express");
const router = Router();

router.post("/create-dentist", createProfileDentistC);
router.post('/verify-dentist-profile', checkDentistProfile);

module.exports = router;