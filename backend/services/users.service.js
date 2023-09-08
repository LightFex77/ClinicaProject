const connection = require("../utils/connection");

const registerServices = async (
  name,
  last_name,
  email,
  phone_number,
  rol,
  password
) => {
  const query = `
    INSERT INTO public.users(
        name, last_name, email, phone_number, rol, password)
        VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [name, last_name, email, phone_number, rol, password];

  try {
    const result = await connection.query(query, values);
    if (result.rows.length > 0) {
      return result.rows[0]; // Devuelve el usuario registrado
    }
    return null; // Ocurrió un error o no se registró el usuario
  } catch (error) {
    throw error; // Propaga el error para que el controlador lo maneje
  }
};

const checkUserExists = async (email, phone_number) => {
  const query = `
  SELECT id, name, last_name, email, phone_number, rol, password
  FROM public.users
  WHERE email = $1 OR phone_number = $2;
  `;
  const values = [email, phone_number];

  const result = await connection.query(query, values);

  return result.rows[0];
};

const loginServices = async (user, password) => {
  const query = `
    SELECT id, name, last_name, email, phone_number, rol
    FROM public.users
    WHERE (email = $1 OR phone_number = $1) AND password = $2;
    `;
  const values = [user, password];

  const result = await connection.query(query, values);
  const userRow = result.rows[0];

  if (!userRow) {
    return null; // El usuario no existe
  }

    return userRow; // Devuelve el usuario si la contraseña coincide
};

const getUsersServices = async (user) => {
  const query = `
    SELECT id, name, last_name, email, phone_number, rol
    FROM public.users
    WHERE (email = $1 OR phone_number = $1);
  `;
  const values = [user];

  const result = await connection.query(query, values);

  return result.rows;
};

const updateRolServices = async (rol, id) => {
  const query = `
  UPDATE public.users
	SET rol=$1
	WHERE id = $2
  RETURNING id, name, last_name, email, phone_number, rol;
  `;
  const values = [rol, id];

  const result = await connection.query(query, values);

  return result.rows[0];
};

module.exports = {
  registerServices,
  loginServices,
  checkUserExists,
  getUsersServices,
  updateRolServices,
};
