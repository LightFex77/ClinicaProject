const { registerServices, loginServices, checkUserExists } = require("../services/users.service");

const registerController = async (req, res) => {
  const { name, last_name, email, phone_number, rol, password } = req.body;

  // Verificar si ya existe un usuario con el mismo correo o número de teléfono
  const existingUser = await checkUserExists(email, phone_number);

  if (existingUser) {
    // El usuario ya existe, devolver un error
    return res.status(400).json({
      error: "Ya existe un usuario con el mismo correo o número de teléfono.",
    });
  }

  // Si no existe, proceder con el registro
  const register = await registerServices(
    name,
    last_name,
    email,
    phone_number,
    rol,
    password
  );

  if (register) {
    // Registro exitoso
    return res.status(200).json({
      message: "Registro exitoso.",
    });
  } else {
    // Ocurrió un error durante el registro
    return res.status(500).json({
      error: "Se produjo un error durante el registro.",
    });
  }
};


const loginController = async(req, res) => {
    const {user, password} = req.body;

    const result = await loginServices(user, password);

    res.status(200).json({
        user: result
    });

}

module.exports = {
  registerController,
  loginController
};
