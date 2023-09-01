const { registerServices, loginServices } = require("../services/users.service");

const registerController = async (req, res) => {
  const { name, last_name, email, phone_number, rol, password } = req.body;

  const register = await registerServices(
    name,
    last_name,
    email,
    phone_number,
    rol,
    password
  );
  res.status(200).json({
    users: register,
  });
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
