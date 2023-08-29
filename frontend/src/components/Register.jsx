import Input from "./elements/Input";
import Button from "./elements/Button";
import "../styles/register.css";
import HeaderBody from "./elements/HeaderBody";
// import {useEffect, useState} from "react";


const Register = () => {

  const sendFormRegister = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="register-container">
      <form onSubmit={sendFormRegister}>
      <HeaderBody h1Text="Registrate" style={{ textAlign: "center", color: "#B573DC"}} />
        <section className="personal-section">
          <Input placeholder="Juan" labelText="Nombre" id="nombre" name="nombre"/>
          <Input placeholder="Perez" labelText="Apellido" id="apellido" name="apellido"/>  
          <Input placeholder="Juan@example.com" labelText="Email" id="email" name="email"/>
          <Input type="tel" placeholder="09XX-XXX-XXX" labelText= "Telefono" id="numeroTelefono" name="numeroTelefono"/>
          <Input labelText="Contraseña" placeholder="********"/>
          <Input labelText="Repetir contraseña" placeholder="********"/>
          </section>

        <Button buttonText="Enviar" />
      </form>
    </div>
  );
};

export default Register;
