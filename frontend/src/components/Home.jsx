import "../styles/home.css";
import Footer from "./Footer";
import ServicesSection from "./elements/ServicesSection";
import SliderSection from "./elements/SliderSection";
import SpecialistsSection from "./elements/SpecialistsSection";

const Home = () => {
  return (
    <div className="home-container">
      <SliderSection
        titleText="Consultar"
        textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit
              expedita asperiores obcaecati eum quasi totam explicabo voluptatem
              excepturi architecto, voluptates minus reprehenderit suscipit
              error, doloribus corporis odit eius ducimus!"
              buttonText="Consultar"
      />
      <ServicesSection />
      <SpecialistsSection/>
      <Footer />
    </div>
  );
};

export default Home;
