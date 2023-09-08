const connection = require("../utils/connection");

//Agregar Horarios
const createSchedulesService = async (reqBody) => {
  try {
    const results = [];

    for (const item of reqBody) {
      const { id, date, hour, available } = item;
      const dayCurrent = new Date();
      const dateFromReqBody = new Date(date + `T00:00:00`); // Formatea la fecha y hora

      // Verifica si la fecha es mayor que la fecha actual
      if (dateFromReqBody > dayCurrent) {
        // Ejecuta la inserción en la base de datos
        const query = `
            INSERT INTO public.schedules(
              dentist_id, schedule_date, "schedule_time ", is_available)
              VALUES ($1, $2, $3, $4);`;

        const values = [id, date, hour, available];
        const result = await connection.query(query, values);

        // Agrega el resultado a la lista de resultados
        results.push(result.rows[0]);
      } else {
        // Si la fecha no es mayor, puedes hacer algo como registrar un mensaje de error
        console.log(`La fecha ${date} no cumple con la condición.`);
      }
    }

    return results;
  } catch (error) {
    throw new Error(
      "Error al crear horarios en la base de datos: " + error.message
    );
  }
};

const getSchedulesService = async (dentist_id, date) => {
  const query = `
    SELECT id, dentist_id, schedule_date, "schedule_time ", is_available
	FROM public.schedules
    WHERE (dentist_id = $1 AND schedule_date = $2);
    `;
  const values = [dentist_id, date];

  const result = await connection.query(query, values);

  return result.rows;
};

const scheduleAppointmentService = async ({
  dentist_id,
  schedule_id
}) => {
  try {
    const query = `
    UPDATE public.schedules
    SET is_available = false
    WHERE dentist_id = $1 AND id = $2
    RETURNING *;
      `;

    const values = [dentist_id, schedule_id];

    const result = await connection.query(query, values);

    if (result.rowCount > 0) {
      // Si rowCount es mayor que 0, significa que se actualizó al menos un registro
      return result.rows[0]; // Devuelve los registros actualizados
    } else {
      // Si rowCount es igual a 0, significa que no se encontraron registros para actualizar
      return "No se encontraron registros para actualizar.";
    }
  } catch (error) {
    return "Error al programar la cita: " + error.message;
  }
};

const appointmentUserService = async (
  appointment_date,
  appointment_time,
  dentist_id,
  schedule_id,
  patient_id,
  appointment_state
) => {
  try {
    const query = `
    INSERT INTO public.appointments(
        appointment_date, appointment_time, dentist_id, patient_id, schedule_id, appointment_state)
        VALUES ($1, $2, $3, $5, $4, $6)
        RETURNING *;
    `;
    const values = [
      appointment_date,
      appointment_time,
      dentist_id,
      schedule_id,
      patient_id,
      appointment_state = "pen"
    ];

    const result = await connection.query(query, values);

    if (result.rowCount > 0) {
      // Si rowCount es mayor que 0, significa que se actualizó al menos un registro
      return result.rows[0]; // Devuelve los registros actualizados
    } else {
      // Si rowCount es igual a 0, significa que no se encontraron registros para actualizar
      return "No se encontraron registros para actualizar.";
    }
  } catch (error) {
    return error.message;
  }
};

const getAppointmentExistService = async ({ user_id, dentist_id, rol }) => {
  if (rol === "PTT") {
    const query = `
    SELECT ap.id, ud.name, ud.last_name, ud.phone_number, ap.appointment_date, ap.appointment_time, d.specialty
    FROM public.appointments AS ap

    INNER JOIN dentists AS d
    ON d.id = ap.dentist_id 

    INNER JOIN users AS ud
    ON d.user_id = ud.id

    WHERE ap.patient_id = $1
    `;
    const values = [user_id];
    const result = await connection.query(query, values);

    return result.rows;
  } else if ("ODT") {
    const query = `
    SELECT ap.id, up.name, up.last_name, up.phone_number, ap.appointment_date, ap.appointment_time
	FROM public.appointments AS ap

    INNER JOIN users AS up
    ON up.id = ap.patient_id

    WHERE dentist_id = $1
    `;
    const values = [dentist_id];
    const result = await connection.query(query, values);

    return result.rows;
  }
};

const cancelAndDeleteAppointmentService = async (schedule_id, dentist_id, patient_id) => {
    try {
      // Actualizar la cita a disponible
      const updateQuery = `
        UPDATE public.schedules
        SET is_available = true
        WHERE id = $1 AND dentist_id = $2;
      `;
      const updateValues = [schedule_id, dentist_id];
      await connection.query(updateQuery, updateValues);
  
      // Eliminar la cita
      const deleteQuery = `
        DELETE FROM public.appointments
        WHERE dentist_id = $1 AND patient_id = $2 AND schedule_id = $3;
      `;
      const deleteValues = [dentist_id, patient_id, schedule_id];
      await connection.query(deleteQuery, deleteValues);
  
      return "Cita cancelada y eliminada con éxito.";
    } catch (error) {
      return "Error al cancelar y eliminar la cita: " + error.message;
    }
  };

module.exports = {
  createSchedulesService,
  getSchedulesService,
  scheduleAppointmentService,
  appointmentUserService,
  getAppointmentExistService,
cancelAndDeleteAppointmentService
};
