import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/home/Main"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Consults from "./components/consults/Consults";
import "./styles/elements.css";
import "./styles/consults.css";

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
    <Route path= "/" element = {<Home />} />
    <Route path="/consultas" element = {<Consults />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
