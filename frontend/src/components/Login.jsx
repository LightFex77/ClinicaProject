import Button from "./elements/Button"
import HeaderBody from "./elements/HeaderBody"
import Input from "./elements/Input"

const Login = () => {
    return(
        <div className="register-container">
            <HeaderBody h1Text="Iniciar Sesion" style={{textAlign: "center", color: "#B573DC"}}/>
            <form>
                <Input placeholder="Telefono o email" labelText="Usuario" id="nombre"/>
                <Input placeholder="**********" labelText="Contraseña" id="contraseña"/>
                <Button buttonText="Enviar"/>
            </form>
        </div>
    )
}

export default Login