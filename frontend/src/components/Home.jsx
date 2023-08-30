import "../styles/home.css";
import Footer from "./Footer";
import ServicesSection from "./elements/ServicesSection";
import HeaderBody from "../components/elements/HeaderBody";
import Button from "../components/elements/Button";
// import SpecialistsSection from "./elements/SpecialistsSection";

const Home = () => {
  return (
    <div className="home-container">
      <section className="section-slider-home">
        <div className="section-images-slider">
          <div className="section-text-slider">
            <HeaderBody h1Text="Consultar" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ut quis accusamus impedit corrupti harum at vel dolore architecto adipisci repudiandae nulla mollitia dolores vitae modi voluptatibus sapiente corporis laudantium!
            </p>
            <div>
              <Button buttonText="Consultar" />
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      {/* <SpecialistsSection/> */}
      <Footer />
    </div>
  );
};

export default Home;
