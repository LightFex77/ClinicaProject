import "../../styles/services.css";
import ServicesCards from "./ServicesCards";
import { data } from "../../data";

const Services = () => {
  return (
        <div className="services-container">
          <div className="services-container-title">
            <h1>Servicios</h1>
          </div>
          <section className="services-section">
            {data.map((item, index) => (
              <ServicesCards
                key={index}
                titleCard={item.title}
                imageCard={item.imageUrl}
              />
            ))}
          </section>
        </div>
      )
};

export default Services;
