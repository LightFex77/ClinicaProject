import Input from "./elements/Input";
import Select from "./elements/Select";
import Button from "./elements/Button";

const Register = () => {
    const sendFormRegister = () => {

    }
    const data = [{
        text: "Ciudad",
        value: "1"
    }]
    return(
        <div className="register-container">
            <form onSubmit={sendFormRegister}>
                <Input placeholder="Nombre" labelText="Nombre:"/>
                <Input placeholder="Apellido" labelText="Apellido:"/>
                <Input placeholder="DNI" labelText="Cedula de Identidad"/>
                <Input type="tel" placeholder="xxx-xxx-xxx" labelText="Telefono:"/>
                <Select options={data} labelText="Departamento"/>
                <Select options={data} labelText="Ciudad"/>
                <Button buttonText="Enviar"/>
            </form>
        </div>
    )
}

export default Register