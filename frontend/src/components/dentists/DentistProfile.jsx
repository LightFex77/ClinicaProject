const DentistProfile = () => {
  const getUserStorage = () => {
    return localStorage.getItem("user");
  }
  return (
    <div>
      {getUserStorage()}
    </div>
  )
}

export default DentistProfile
