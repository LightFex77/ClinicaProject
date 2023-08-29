import Input from "./elements/Input";
import Button from "./elements/Button";
import "../styles/register.css";
import HeaderBody from "./elements/HeaderBody";
// import {useEffect, useState} from "react";


const Register = () => {

  const sendFormRegister = (e) => {
    e.preventDefault();
  };

  const departamentsData = [
    { name: "Asunción", value: 1 },
    { name: "Concepción", value: 2 },
    { name: "San Pedro", value: 3 },
    { name: "Cordillera", value: 4 },
    { name: "Guairá", value: 5 },
    { name: "Caaguazú", value: 6 },
    { name: "Caazapá", value: 7 },
    { name: "Itapúa", value: 8 },
    { name: "Misiones", value: 9 },
    { name: "Paraguarí", value: 10 },
    { name: "Alto Paraná", value: 11 },
    { name: "Central", value: 12 },
    { name: "Ñeembucú", value: 13 },
    { name: "Amambay", value: 14 },
    { name: "Canindeyú", value: 15 },
    { name: "Presidente Hayes", value: 16 },
    { name: "Boquerón", value: 17 },
    { name: "Alto Paraguay", value: 18 }
  ];
  
  console.log(departamentsData);
  
  return (
    <div className="register-container">
      <form onSubmit={sendFormRegister}>
      <HeaderBody h1Text="Registrate" style={{ textAlign: "center", color: "#B573DC"}} />
        <section className="personal-section">
          <Input placeholder="Juan" labelText="Nombre" id="nombre" name="nombre"/>
          <Input placeholder="Perez" labelText="Apellido" id="apellido" name="apellido"/>  
          <Input placeholder="Juan@example.com" labelText="Email" id="email" name="email"/>
          <Input type="tel" placeholder="09XX-XXX-XXX" labelText= "Telefono" id="numeroTelefono" name="numeroTelefono"/>
          </section>

        <Button buttonText="Enviar" />
      </form>
    </div>
  );
};

export default Register;
