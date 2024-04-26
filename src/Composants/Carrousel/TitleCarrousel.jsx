import '../../styles/Carrousel/titleCarrousel.scss'

function TitleCarrousel({title, location}) {
    return (
    <section className='sectionTitleCarrousel'>
      <div>
          <h1 className="titleRental">{title}</h1>
          <p className="locationRental">{location}</p>
      </div>
    </section>
    )
  }
  
  export default TitleCarrousel