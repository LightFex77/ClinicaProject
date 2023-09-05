const {
  registerServices,
  loginServices,
  checkUserExists,
  getUsersServices,
  updateRolServices
} = require("../services/users.service");

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

const loginController = async (req, res) => {
  const { user, password } = req.body;

  const validateUser = await checkUserExists(user, user);
  const result = await loginServices(user, password);

  if (!validateUser) {
    return res.status(404).json({
      error: "El usuario no existe",
    });
  } else if (validateUser.password !== password) {
    return res.status(400).json({
      error: "Contraseña incorrecta",
    });
  } else if (result) {
    res.status(200).json({
      user: result,
    });
  } else {
    return res.status(500).json({
      error: "Se produjo un error durante el inicio de sesion",
    });
  }
};

const getUsersController = async (req, res) => {
  const { user } = req.body;

  const response = await getUsersServices(user);

  res.status(200).json({
    user: response
  })
}

const updateRolController = async (req, res) => {
  const { id, rol } = req.body;

  const response = await updateRolServices(rol, id);

  res.status(200).json({
    user: response
  })
}



module.exports = {
  registerController,
  loginController,
  getUsersController,
  updateRolController
};
