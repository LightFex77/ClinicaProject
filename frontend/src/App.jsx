import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/home/Main"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import "./styles/elements.css";
import Services from "./components/section-services/Services";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/register" element={<div className="clinic-container">
      <Register/>
    </div>}/>
      <Route path="/login" element={<div className="clinic-container">
      <Login/>
    </div>}/>
    <Route path="/services" element={<Services interactMode={true} />} />
    <Route path= "/" element = {<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
