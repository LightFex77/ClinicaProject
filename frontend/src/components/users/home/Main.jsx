import "../../../styles/homeContent.css";
import HeaderBody from "../../elements/HeaderBody";
import Button from "../../elements/Button";
import AboutAs from "../section-services/AboutAs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user")
    if(user){
        const userData =JSON.parse(user);
        const {rol} = userData.user
        switch(rol){
          case "ODT":
            navigate("/dentists-panel")
            break
          case "ADM":
            console.log("Es Admin")
            break
          default:
            break
        }
      }
  },[])

  return (
    <div className="main-container">
      <section className="main-section-info">
        <div className="main-section-info-image">
          <div className="main-section-info-text">
            <HeaderBody h1Text="Consultar" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis explicabo iste aperiam excepturi illo labore eos
              officiis distinctio expedita, deleniti consequuntur neque ad non
              rerum assumenda natus aut eum mollitia.
            </p>
            <Button buttonText="Consultar" />
          </div>
        </div>
      </section>
      <AboutAs
        aboutText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto optio tenetur, aspernatur ipsam explicabo! Iure velit consectetur voluptatum, repudiandae ea suscipit magni quam ipsum! Quidem, et. Voluptatum, necessitatibus! Esse!"
        aboutTitle="Sobre nosotros"
        aboutUrlImage= "https://www.una.py/wp-content/uploads/2022/10/20220930151117_IMG_4530.jpg"
      />
    </div>
  );
};

export default Main;
