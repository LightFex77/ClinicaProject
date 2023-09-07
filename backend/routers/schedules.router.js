const { Router } = require("express");
const router = Router();
const {
  createSchedulesController,
  getSchedulesController,
  scheduleAppointmentController,
  getAppointmentExistController,
  cancelAndDeleteAppointmentController
} = require("../controllers/schedules.controller");

//Crear Horarios
router.post("/create-schedule", createSchedulesController);
//Conseguir Horarios
router.post("/get-schedule", getSchedulesController);
//Crear Citas
router.post("/create-appointment", scheduleAppointmentController);
//Obtener Citas
router.post("/get-appointment", getAppointmentExistController);

router.post("/cancel-appointment", cancelAndDeleteAppointmentController);

module.exports = router;
