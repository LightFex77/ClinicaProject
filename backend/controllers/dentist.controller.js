const { createProfileDentistS, verifyDentistProfile } = require("../services/dentist.service");

const createProfileDentistC = async (req, res) => {
  const { city, address, studies, descriptions, user_id, specialty } = req.body;

  try {
    await createProfileDentistS(
      city,
      address,
      studies,
      descriptions,
      user_id,
      specialty
    );

    // La inserción fue exitosa
    res.status(200).json({
      success: true,
      message: "Perfil creado con éxito",
    });
  } catch (error) {
    // Ocurrió un error durante la inserción
    console.error("Error al crear el perfil:", error);
    res.status(400).json({
      success: false,
      error: "Ocurrió un error al crear el perfil",
    });
  }
};

const checkDentistProfile = async (req, res) => {
  const { user_id } = req.body;

  try {
    const exists = await verifyDentistProfile(user_id);

    if (exists) {
      res.status(200).json({
        user: exists,
      });
    } else {
      res.status(404).json({
        user: exists
      });
    }
  } catch (error) {
    console.error('Error al verificar el perfil del dentista:', error);
    res.status(500).json({
      error: 'Error interno del servidor al verificar el perfil del dentista.',
    });
  }
};

module.exports = {
  createProfileDentistC,
  checkDentistProfile
};
