import Button from "./elements/Button";
import HeaderBody from "./elements/HeaderBody";
import Input from "./elements/Input";
import { Link } from "react-router-dom";
import { login } from "../utils/usersLogin";
import { useFormik } from "formik";
import * as Yup from "yup";

// eslint-disable-next-line react/prop-types
const Login = ({ exitModal }) => {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("Usuario requerido"),
      password: Yup.string().required("Constraseña requerida")
    }),
    onSubmit: async (formData) =>{
      try{
        await exitModal
        await login(formData.user, formData.password)
      } catch(error){
        alert("Error al inicar sesion")
      }
    },
  });

  return (
    <div className="register-container">
      <form onSubmit={formik.handleSubmit}>
        <HeaderBody
          h1Text="Iniciar Sesion"
          style={{ textAlign: "center", color: "#7f4ca5" }}
        />
        <Input
          placeholder="Telefono o email"
          labelText="Usuario"
          id="user"
          name="user"
          onChange={formik.handleChange}
          error={formik.errors.user}
        />
        <Input
          placeholder="**********"
          labelText="Contraseña"
          id="password"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <div className="register-btn">
          <Button buttonText="Enviar"/>
          <Button buttonText="Cancelar" onClick={exitModal} />
        </div>

        <span className="link-register">
          <Link to="/register">¿Aun no tienes una cuenta? Registrate</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
