import { dentists } from "../../../data";

// eslint-disable-next-line react/prop-types
const Profile = ({ id }) => {
  const dentist = dentists.find((dentist) => dentist.id === id);

  return (
    <div className="modal-container-consults">
      <div className="modal-consults-g">
        <div className="header-profile">
          <h1>{dentist.name}</h1>
          <img src={dentist.photo} alt="" />
          <h2>{dentist.specialty}</h2>
          <h2>
            {dentist.studies.map((study, index) => (
              <ul key={index} style={{ listStyle: "none" }}>
                <li>{study}</li>
              </ul>
            ))}
          </h2>
          <h2>
            {dentist.location} {dentist.address}
          </h2>
        </div>
        <div className="profile-desciption">
          <p>{dentist.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
