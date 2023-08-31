import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/home/Main"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import "./styles/elements.css";
import "./styles/sideMenu.css";
import Services from "./components/section-services/Services";
import SideMenu from "./components/section-services/SideMenu";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/registrarse" element={<div className="clinic-container">
      <Register/>
    </div>}/>
      <Route path="/iniciar-sesion" element={<div className="clinic-container">
      <Login/>
    </div>}/>
    <Route path="/consultas" element={
    <div className="consults-container"><SideMenu/><Services /></div>} />
    <Route path= "/" element = {<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
