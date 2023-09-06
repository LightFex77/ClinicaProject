import { useState} from "react";
import Button from "./elements/Button";
import HeaderBody from "./elements/HeaderBody";
import Input from "./elements/Input";
import { Link } from "react-router-dom";
import { login } from "../utils/usersLogin";
import { useFormik } from "formik";
import * as Yup from "yup";

// eslint-disable-next-line react/prop-types
const Login = ({ setShowLogin }) => {
  const [response, setResponse] = useState(null);

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("Usuario requerido"),
      password: Yup.string().required("Contraseña requerida"),
    }),
    onSubmit: async ({ user, password }) => {
      try {
        const loginResponse = await login(user, password);
        setResponse(loginResponse);
        //Esperando si todo fue ok y recibir el objeto
        loginResponse.res.status === 200 && setShowLogin(false);
        localStorage.setItem("user", JSON.stringify(loginResponse.dataUser))
      } catch (error) {
        alert("Error al iniciar sesión");
      }
    },
  });
  return (
    <div className="register-container">
      <form onSubmit={formik.handleSubmit}>
        <HeaderBody
          h1Text="Iniciar Sesión"
          style={{ textAlign: "center", color: "#BB7CB7" }}
        />
        <Input
          placeholder="Teléfono o email"
          labelText="Usuario"
          id="user"
          name="user"
          onChange={formik.handleChange}
          error={
            formik.errors.user ||
            (response && response.res.status === 404 && "El usuario no existe")
          }
        />
        <Input
          placeholder="**********"
          labelText="Contraseña"
          id="password"
          name="password"
          onChange={formik.handleChange}
          error={
            formik.errors.password ||
            (response && response.res.status === 400 && "Contraseña incorrecta")
          }
        />

        <div className="register-btn">
          <Button buttonText="Enviar" type="submit" />
          <Button buttonText="Cancelar" onClick={() => setShowLogin(false)} />
        </div>
        <span className="link-register">
          <Link to="/register">¿Aún no tienes una cuenta? Regístrate</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
