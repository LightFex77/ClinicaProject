// eslint-disable-next-line react/prop-types
const ServicesCards = ({titleCard, imageCard}) => {
  return (
    <div>
            <article className="services-article">
                <div className="services-article-title">
                    <h1>{titleCard}</h1>
                     <div className="services-article-img">
                        <img src={imageCard}/>
                    </div>
                </div>
            </article>
    </div>
  )
}

export default ServicesCards
