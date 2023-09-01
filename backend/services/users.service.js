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
        VALUES ($1, $2, $3, $4, $5, $6);
    `;
  const values = [name, last_name, email, phone_number, rol, password];
  const result = await connection.query(query, values);

  return result.rows;
};

const getUsers = async () => {
  const query = `
    SELECT id, name, last_name, email, phone_number, rol, password
	FROM public.users;
    `;
  const result = await connection.query(query);

  return result.rows;
};

const loginServices = async (user, password) => {
  const query = `
    SELECT id, name, last_name, email, phone_number, rol, password
    FROM public.users
    WHERE (email = $1 OR phone_number = $1) AND password = $2;
    `;
  const values = [user, password];

  const result = await connection.query(query, values);

  return result.rows[0];
};

module.exports = {
  registerServices,
  getUsers,
  loginServices,
};