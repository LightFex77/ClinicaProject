import Login from "../components/Login"
import Register from "../components/Register";
import "../styles/login.css"
export const showLogin = (showLogin, setShowLogin) => {
    return showLogin && <Login exitModal={(e) => {
        e.preventDefault()
        setShowLogin(false)
      }}/>
  }
export const showRegister = (showRegister, sethowRegister) => {
    return showRegister && <Register exitModal={(e) => {
        e.preventDefault()
        sethowRegister(false)
      }}/>
}