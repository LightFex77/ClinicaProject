import HeaderBody from "./HeaderBody";
import Button from "./Button";
import image from "../../assets/images/hermoso-dentista-trabajando-clinica-dental.jpg"

// eslint-disable-next-line react/prop-types
const SliderSection = ({titleText, textContent, buttonText}) => {
  return (
    <>
      <section className="section-slider-home">
        <div className="section-images-slider" style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('${image}')`, backgroundSize: "100% 100%"}}>
          <div className="section-text-slider">
            <HeaderBody h1Text={titleText} />
            <p>
              {textContent}
            </p>
            <div>
              <Button buttonText={buttonText} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderSection;
