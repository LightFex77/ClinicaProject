import Register from "./components/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div className="clinic-container">
      <Register/>
    </div>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
