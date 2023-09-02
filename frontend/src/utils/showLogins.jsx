import Login from "../components/Login"
import Register from "../components/Register";
import "../styles/login.css"
export const showLogin = (showLogin, setShowLogin) => {
    return showLogin && <Login setShowLogin={setShowLogin}/>
  }
export const showRegister = (showRegister, sethowRegister) => {
    return showRegister && <Register setShowRegister={sethowRegister}/>
}