import Home from "./components/users/home/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/users/home/Header";
// import Footer from "./components/users/home/Footer";
import AdminTools from "./components/admin/AdminsTools";
import Dentists from "./components/dentists/Dentists";
import Consults from "./components/users/consults/Consults";
import SideMenu from "./components/dentists/sideMenu";
import "./styles/admin/admin.css";
import "./styles/elements.css";
import "./styles/consults.css";
import "./styles/modalsOfConsults.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path= "/" element = {<><Header navBar={true} /><Home /></>} />
    <Route path="/consultas" element = {<><Header navBar={true} /><Consults /></>}/>

    <Route path="/dentists-panel/*" element={<><Header /><SideMenu /><Dentists /></>} />

    <Route path="/admin-tools" element= {<><Header navBar={false} /><AdminTools /></>}/>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
