import HeaderBody from "./HeaderBody";
// eslint-disable-next-line react/prop-types
const ServicesCards = ({ image, titleText }) => {
  return (
      <div className="card-info">
        <div className="service-image" style={{background: `url('${image}')`, backgroundSize: "100% 100%"}}></div>
        <HeaderBody h1Text={titleText} hr={true}/>
      </div>
  );
};

export default ServicesCards;
