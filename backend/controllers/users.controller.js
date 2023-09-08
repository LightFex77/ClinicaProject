const jwt = require("jsonwebtoken");

const sendResponse = (res, status, message) => {
  return res.status(status).json({ message });
};

const {
  registerServices,
  loginServices,
  checkUserExists,
  getUsersServices,
  updateRolServices,
} = require("../services/users.service");

const registerController = async (req, res) => {
  const { name, last_name, email, phone_number, rol, password } = req.body;

  try {
    const existingUser = await checkUserExists(email, phone_number);

    if (existingUser) {
      return sendResponse(
        res,
        400,
        "Ya existe un usuario con el mismo correo o número de teléfono."
      );
    }

    const registeredUser = await registerServices(
      name,
      last_name,
      email,
      phone_number,
      rol,
      password
    );

    if (registeredUser) {
      const token = jwt.sign(userRow, process.env.JWT_KEY_SECRET, {
        expiresIn: 86400,
      });
      return sendResponse(res, 200, { token });
    } else {
      return sendResponse(res, 500, "Se produjo un error durante el registro.");
    }
  } catch (error) {
    return sendResponse(res, 500, "Error en el servidor.");
  }
};

const loginController = async (req, res) => {
  const { user, password } = req.body;

  try {
    const userRow = await loginServices(user, password);

    if (!userRow) {
      return sendResponse(res, 404, "El usuario no existe");
    }

    const token = jwt.sign(userRow, process.env.JWT_KEY_SECRET, {
      expiresIn: 86400,
    });
    return sendResponse(res, 200, { token });
  } catch (error) {
    return sendResponse(res, 500, "Error en el servidor");
  }
};

const getUsersController = async (req, res) => {
  try {
    const { user } = req.query; // Obtén el valor de "user" desde la URL

    const response = await getUsersServices(user);

    if (response) {
      return sendResponse(res, 200, { user: response });
    } else {
      return sendResponse(res, 404, { error: "Usuario no encontrado" });
    }
  } catch (error) {
    return sendResponse(res, 500, { error: "Error en el servidor" });
  }
};

const updateRolController = async (req, res) => {
  try {
    const { id } = req.params;
    const { rol } = req.body;

    // Realiza la actualización en la base de datos utilizando el id y el nuevo rol
    const response = await updateRolServices(rol, id);
    console.log(response);

    // Verifica si la actualización fue exitosa y responde con el resultado
    if (response) {
      return sendResponse(res, 200, { user: response });
    } else {
      return sendResponse(res, 404, { error: "Usuario no encontrado" });
    }
  } catch (error) {
    return sendResponse(res, 500, { error: "Error en el servidor" });
  }
};

module.exports = {
  registerController,
  loginController,
  getUsersController,
  updateRolController,
};
