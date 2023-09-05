import { Route, Routes, Navigate } from "react-router-dom";
import DentistQuotes from "./DentistQuotes";
import DentistSchedules from "./DentistSchedules";
import DentistProfile from "./DentistProfile";

const Dentists = () => {
  return (
    <div className="dentist-container">
      <div className="dentist-panel">
        <Routes>
        <Route path="" element={<Navigate to="profile" />} />
          <Route path="/profile" element={<DentistProfile />} />
          <Route path="/schedules" element={<DentistSchedules />} />
          <Route path="/quotes" element={<DentistQuotes />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dentists;
