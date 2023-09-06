const connection = require("../utils/connection");

const createProfileDentistS = async (
    city,
    address,
    studies,
    descriptions,
    user_id,
    specialty
  ) => {
    const query = `
    INSERT INTO public.dentists(
      city, address, studies, descriptions, user_id, specialty)
      VALUES ($1, $2, $3, $4, $5, $6);
    `;
    const values = [city, address, studies, descriptions, user_id, specialty];
  
    const result = await connection.query(query, values);
  
    return result.rows[0];
  };

  const verifyDentistProfile = async (user_id) => {
    try {
      const query = `
      SELECT d.id, u.name, u.last_name, u.phone_number, d.city, d.address, d.studies, d.descriptions, d.user_id, d.specialty
      FROM public.dentists AS d
      
      INNER JOIN users AS u 
      ON d.user_id = u.id
      
      WHERE d.user_id = $1;

      `;
      const values = [user_id];
  
      const result = await connection.query(query, values);
  
      if (result.rows.length > 0) {
        // Si la consulta devuelve al menos una fila, el perfil existe
        return {
          exists: true,
          profileData: result.rows[0], // Datos del perfil
        };
      } else {
        return {
          exists: false,
          profileData: null, // No se encontró ningún perfil
        };
      }
    } catch (error) {
      console.error('Error al verificar el perfil del dentista:', error);
      return {
        exists: false,
        profileData: null,
      };
    }
  };
  
  module.exports = {
    verifyDentistProfile
  };
  

  module.exports = {
    createProfileDentistS,
    verifyDentistProfile
  }