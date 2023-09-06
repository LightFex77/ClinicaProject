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
  
      return response

    } catch (error) {
      // Error de red o error en la solicitud.
      console.error("Se produjo un error al realizar la solicitud:", error);
    }
  };
  
  export const login = async (user, password) => {
    const userData = {
      user: user,
      password: password
    }
  
    const response = await fetch("http://localhost:3000/login-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
  
    if (response.status === 200) {
      // Espera la resolución de la promesa y obtén los datos del usuario
      const dataUser = await response.json();
  
      // Devuelve los datos del usuario
      return { res: response, dataUser: dataUser };
    } else {
      // Manejar otros códigos de estado según sea necesario
      return { res: response, dataUser: null };
    }
  }
  