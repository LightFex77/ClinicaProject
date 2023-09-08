const { Router } = require("express");
const {verifyToken, checkUserRole} = require("../middlewares/authMiddleware");
const router = Router();
const {
  createSchedulesController,
  getSchedulesController,
  scheduleAppointmentController,
  getAppointmentExistController,
  cancelAndDeleteAppointmentController
} = require("../controllers/schedules.controller");

//Crear Horarios
router.post("/create-schedule",verifyToken, checkUserRole(["ODT"]) ,createSchedulesController);
//Conseguir Horarios
router.post("/get-schedule", verifyToken, getSchedulesController);
//Crear Citas
router.post("/create-appointment", verifyToken, scheduleAppointmentController);
//Obtener Citas
router.post("/get-appointment", verifyToken, getAppointmentExistController);

router.post("/cancel-appointment", verifyToken ,cancelAndDeleteAppointmentController);

module.exports = router;
