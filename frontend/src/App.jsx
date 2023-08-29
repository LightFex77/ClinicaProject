import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<div className="clinic-container">
      <Register/>
    </div>}/>
      <Route path="/login" element={<div className="clinic-container">
      <Login/>
    </div>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
