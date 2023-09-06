/* eslint-disable react/prop-types */
const DentistProfileInfo = ({ profileData }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-d">
        <img src={profileData.photo} alt="Dentist" />
        <h1>
          {profileData.name} {profileData.last_name}
          <hr />
        </h1>

        <div className="profile-d">
          <label className="details-info-container">
            Teléfono:
            <span>{profileData.phone_number}</span>
          </label>
          <label className="details-info-container">
            Ciudad:
            <span>{profileData.city}</span>
          </label>
        </div>
          <label className="description-container">
            Descripción:
            <span>{profileData.descriptions}</span>
          </label>
        </div>
      </div>
      <div className="profile-details">
          <label className="details-info-container">
            Dirección:
            <span>{profileData.address}</span>
          </label>
          <label className="details-info-container">
            Estudios:
            <span>{profileData.studies}</span>
          </label>
          <label className="details-info-container">
            Especialidad:
            <span>{profileData.specialty}</span>
          </label>
      </div>
    </div>
  );
};

export default DentistProfileInfo;
