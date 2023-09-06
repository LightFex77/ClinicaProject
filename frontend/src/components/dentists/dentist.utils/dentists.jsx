export const createProfileDentist = (data) => {
  const response = fetch("http://localhost:3000/create-dentist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const verifyDentistProfile = async (user_id) => {
  try {
    const response = await fetch("http://localhost:3000/verify-dentist-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user_id}),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error al verificar el perfil del dentista");
    }
  } catch (error) {
    console.error("Error al verificar el perfil del dentista:", error);
    return { error: "Error al verificar el perfil del dentista" };
  }
};
