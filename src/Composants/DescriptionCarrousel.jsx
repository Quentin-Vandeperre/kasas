import '../styles/descriptionCarrousel.scss'

function DescriptionCarrousel({title, location, name, picture}) {
    return (
    <section className='sectionDescriptionCarrousel'>
      <div>
          <h1 className="titleRental">{title}</h1>
          <p className="locationRental">{location}</p>
      </div>
      <div className='divProfilOwner'>
        <p className="nameOwner">{name}</p>
        <img src={picture} alt="photo de profil" className="pictureOwner"/>
      </div>
    </section>
    )
  }
  
  export default DescriptionCarrousel