import  { useState } from 'react';
import HeaderBody from "./HeaderBody";
import ServicesCards from "./ServicesCards";
import { data } from "../../data";

const ServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Controla cuántos servicios mostrar
  const servicesToShow = showAllServices ? data.length : 3;

  return (
    <section className="services-section">
      <div className='title-text-service'>
      <HeaderBody h1Text="Servicios" hr={true} style={{ fontSize: "2rem" }} />
      </div>

      <div className="cards-services">
        {data.slice(0, servicesToShow).map((item, index) => (
          <ServicesCards
            key={index}
            titleText={item.title}
            image={item.imageUrl}
          />
        ))}
      </div>

      {/* Botón para alternar entre "Ver Más" y "Ver Menos" */}
      <button onClick={() => setShowAllServices(!showAllServices)}>
        {showAllServices ? 'Ver Menos' : 'Ver Más'}
      </button>
    </section>
  );
};

export default ServicesSection;
