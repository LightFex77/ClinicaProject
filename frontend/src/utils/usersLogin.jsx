export const register = async (name, last_name, email, password, phone_number) => {
    const user = {
      name: name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      rol: "PTT",
      password: password,
    };
  
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.status === 200) {
        // El registro fue exitoso
        console.log("Registro exitoso.");
        // Puedes realizar otras acciones aquí, como redireccionar a la página de inicio de sesión.
      } else if (response.status === 400) {
        // Hubo un error en los datos proporcionados por el usuario.
        console.error("Error en los datos proporcionados por el usuario.");
      } else if (response.status === 409) {
        // El usuario ya existe, se ha producido un conflicto.
        console.error("Ya existe un usuario con el mismo correo o número de teléfono.");
      } else {
        // Otro error no manejado.
        console.error("Se produjo un error inesperado en el servidor.");
      }
    } catch (error) {
      // Error de red o error en la solicitud.
      console.error("Se produjo un error al realizar la solicitud:", error);
    }
  };
  