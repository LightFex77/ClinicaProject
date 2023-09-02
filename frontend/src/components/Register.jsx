/* eslint-disable react/prop-types */
import Input from "./elements/Input";
import Button from "./elements/Button";
// import "../styles/register.css";
import HeaderBody from "./elements/HeaderBody";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../utils/usersLogin";
import { useState } from "react";
// import {useEffect, useState} from "react";

const Register = ({ setShowRegister }) => {
  const [response, setResponse] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      password: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nombre requerido"),
      lastName: Yup.string().required("Apellido requerido"),
      password: Yup.string().required("Contraseña requerida"),
      email: Yup.string()
        .email("El email no es valido")
        .required("Email requerido"),
      phoneNumber: Yup.string().required("Telefono requerido"),
    }),
    onSubmit: async ({ name, lastName, email, password, phoneNumber }) => {
      try {
        const registerResponse = await register(
          name,
          lastName,
          email,
          password,
          phoneNumber
        );
        setResponse(registerResponse);
        registerResponse.status === 200 && setShowRegister(false);
      } catch (error) {
        alert("Error al registrarse");
      }
    },
  });

  return (
    <div className="register-container">
      <form onSubmit={formik.handleSubmit}>
        <HeaderBody
          h1Text="Registrate"
          style={{ textAlign: "center", color: "#7f4ca5" }}
        />
        <section className="personal-section">
          <Input
            placeholder="Juan"
            labelText="Nombre"
            id="nombre"
            name="name"
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Input
            placeholder="Perez"
            labelText="Apellido"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            error={formik.errors.lastName}
          />
          <Input
            placeholder="Juan@example.com"
            labelText="Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <Input
            type="tel"
            placeholder="09XX-XXX-XXX"
            labelText="Telefono"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            error={formik.errors.phoneNumber}
          />
          <Input
            labelText="Contraseña"
            placeholder="********"
            name="password"
            id="password"
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
        </section>

        <div className="register-btn">
          <Button buttonText="Enviar"/>
          <Button
            buttonText="Cancelar"
            onClick={() => setShowRegister(false)}
          />
        </div>

        {response && (response.status === 400 ? (
          <p>El email o numero de telefono ya existe</p>
        ) : (
          <p>Se produjo un error inesperado en el servidor</p>
        ))}
      </form>
    </div>
  );
};

export default Register;
