import HeaderBody from "./HeaderBody"
import SpecialistsCards from "./SpecialistsCards"

const SpecialistsSection = () => {
  return (
    <section className="specialists-container">
      <HeaderBody h1Text="Especialistas" style={{fontSize: "1.5rem"}}/>
        <div className="specialists-section">
          <SpecialistsCards/>
          <SpecialistsCards/>
          <SpecialistsCards/>
          <SpecialistsCards/>
          <SpecialistsCards/>
          <SpecialistsCards/>
        </div>
    </section>
  )
}

export default SpecialistsSection