// DentistProfileForm.js
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createProfileDentist,
  verifyDentistProfile,
} from "./dentist.utils/dentists";
import { useEffect, useState } from "react";
import DentistProfileForm from "./DentistProfileForm"; // Importa el componente de perfil
import DentistProfileInfo from "./DentistProfileInfo";

// Este componente contiene el formulario
const DentistProfile = () => {
  const [profileExists, setProfileExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileCreated, setProfileCreated] = useState(false);
  const [dentistData, setDentistData] = useState(null);

  useEffect(() => {
    const verifyProfileExistence = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const result = await verifyDentistProfile(user.user.id);

        setProfileExists(result.user.exists);
        setDentistData(result.user.profileData);
        setLoading(false);
      } catch (error) {
        console.error("Error al verificar el perfil del dentista:", error);
        setLoading(false);
      }
    };

    verifyProfileExistence();
  }, []);

  const initialValues = {
    city: "",
    address: "",
    studies: "",
    descriptions: "",
    specialty: "",
  };

  const validationSchema = Yup.object({
    city: Yup.string().required("Ciudad es requerida"),
    address: Yup.string().required("Dirección es requerida"),
    studies: Yup.string().required("Estudios son requeridos"),
    descriptions: Yup.string().required("Descripciones son requeridas"),
    specialty: Yup.string().required("Especialidad es requerida"),
  });

  const onSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      values.user_id = user.user.id;

      await createProfileDentist(values);

      console.log("Perfil del dentista creado con éxito:", values);
      setProfileCreated(true); // Cambia el estado para indicar que se creó el perfil
    } catch (error) {
      console.error("Error al crear el perfil del dentista:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="dentist-profile-container">
      {loading ? (
        <div>Cargando...</div>
      ) : profileExists ? (
        <DentistProfileInfo profileData={dentistData} /> // Muestra el componente de perfil si el perfil ya existe
      ) : profileCreated ? (
        <DentistProfileInfo profileData={dentistData}/>
      ) : (
        <DentistProfileForm formik={formik} />
      )}
    </div>
  );
};

export default DentistProfile;
