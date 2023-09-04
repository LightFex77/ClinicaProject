import Home from "./components/users/home/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/users/home/Header";
import Footer from "./components/users/home/Footer";
import AdminTools from "./components/admin/AdminsTools";
import Dentists from "./components/dentists/Dentists";
import Consults from "./components/users/consults/Consults";
import "./styles/elements.css";
import "./styles/consults.css";
import "./styles/modalsOfConsults.css";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path= "/" element = {<Home />} />
    <Route path="/consultas" element = {<Consults />}/>

    <Route path="/dentists-panel" element={<Dentists />} />

    <Route path="/admin-tools" element= {<AdminTools />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
