export const getUser = async (user) => {
    const data = {
      user: user
    };
  
    try {
      const response = await fetch("http://localhost:3000/get-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('La solicitud falló');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      throw error; // Re-lanzar el error para manejarlo en el nivel superior
    }
  };
  


export const updateRol = async (id, rol) => {
    const data = {
        id: id,
        rol: rol
    };
    
    console.log("Datos a enviar al servidor:", data);
    
    const response = await fetch("http://localhost:3000/update-rol", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Error al actualizar el rol');
    }
    
    const responseData = await response.json();
    console.log("Respuesta del servidor:", responseData);

    return response
}