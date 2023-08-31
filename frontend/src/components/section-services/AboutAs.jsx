import "../../styles/aboutAs.css";
import Button from "../elements/Button"

// eslint-disable-next-line react/prop-types
const AboutAs = ({ aboutText, aboutTitle, aboutUrlImage }) => {
  return (
    <>
      <div className="clinic-info-a"> 
        <section className="about-as">
          <h1>
            {aboutTitle}
            <hr />
          </h1>
          <div className="about-as-container-img">
          <img src={aboutUrlImage} />
          </div>
          <div className="about-as-container-text">
          <p>{aboutText}</p>
          </div>
          <Button buttonText="Ver mas" />
        </section>
      </div>
    </>
  );
};

export default AboutAs;
