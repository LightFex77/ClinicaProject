/* eslint-disable react/prop-types */

import { useState } from "react"
import Profile from "../modals/Profile";
import Schedule from "../modals/Schedule";

// eslint-disable-next-line react/prop-types
const ConsultsTableProgram = ({filteredDentists}) => {
  const[showProfile, setShowProfile] = useState(false);
  const[showSchedule, setShowSchedule] = useState(false);
  const[profileId, setProfileId] = useState(null);

  const getProfile = (id) => {
    setShowProfile(true)
    setProfileId(id);
  }

  return (
    <div className="consults-table-container">
      <table className="consults-table">
      {showProfile ? <Profile id={profileId}/> : null}
      {showSchedule ? <Schedule />: null}
        <thead>
          <tr className="consults-table-title">
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Localidad</th>
            <th>Horario</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          {filteredDentists.map((item, index) => (
            <tr key={index} className="consults-table-info">
              <td>{item.name}</td>
              <td>{item.specialty}</td>
              <td>{item.location}</td>
              <td>{item.hours}</td>
              <td>
                {item.photo}
                <span className="consults-buttons">
                  <button className="btn-profile" onClick={() => getProfile(item.id)}>Ver perfil</button>
                  <button className="btn-program" onClick={() => setShowSchedule(true)}>Agendar</button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ConsultsTableProgram
