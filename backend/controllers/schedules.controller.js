const {
  createSchedulesService,
  getSchedulesService,
  scheduleAppointmentService,
  appointmentUserService,
  getAppointmentExistService,
  cancelAndDeleteAppointmentService,
} = require("../services/schedules.service");

const createSchedulesController = async (req, res) => {
  try {
    const reqBody = req.body;
    const response = await createSchedulesService(reqBody);
    res.status(200).json({
      count: response.length, // Supongo que response es un array de horarios
      schedules: response, // Aquí puedes enviar los horarios como respuesta
    });
  } catch (error) {
    res.status(400).json({
      error: error.message, // Envía el mensaje de error como respuesta
    });
  }
};

const getSchedulesController = async (req, res) => {
  try {
    const { dentist_id, date } = req.body;

    const response = await getSchedulesService(dentist_id, date);

    res.status(200).json({
      schedules: response,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const scheduleAppointmentController = async (req, res) => {
  try {
    const reqBody = req.body;
    const { user_id } = req.body;
    const response = await scheduleAppointmentService(reqBody).then((res) => {
      const { schedule_date, dentist_id, id } = res;
      const schedule_time = res["schedule_time "]; // Acceder con el nombre exacto
      const response = appointmentUserService(
        schedule_date,
        schedule_time, // Usar la variable schedule_time
        dentist_id,
        id,
        user_id
      );
      return response;
    });

    res.status(200).json({
      schedules: response,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getAppointmentExistController = async (req, res) => {
  try {
    const reqBody = req.body;

    const response = await getAppointmentExistService(reqBody);

    res.status(200).json({
      res: response,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const cancelAndDeleteAppointmentController = async (req, res) => {
  try {
    const { schedule_id, dentist_id, patient_id, value = "anu" } = req.body;

    const response = await cancelAndDeleteAppointmentService(
      schedule_id,
      dentist_id,
      patient_id,
      value
    );

    res.status(200).json({
      message: response,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  createSchedulesController,
  getSchedulesController,
  scheduleAppointmentController,
  getAppointmentExistController,
  cancelAndDeleteAppointmentController,
};
