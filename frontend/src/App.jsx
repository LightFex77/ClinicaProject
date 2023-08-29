import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/register" element={<div className="clinic-container">
      <Register/>
    </div>}/>
      <Route path="/login" element={<div className="clinic-container">
      <Login/>
    </div>}/>
    <Route path= "/" element = {<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
