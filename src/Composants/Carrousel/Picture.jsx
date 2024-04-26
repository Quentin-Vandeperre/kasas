import '../../styles/Carrousel/picture.scss'

function Picture({picture, name}) {
         
    return (
    <section className='sectionPicture'>
        <div className='divProfilOwner'>
        <p className="nameOwner">{name}</p>
        <img src={picture} alt="photo de profil" className="pictureOwner"/>
      </div>
    </section>
    )
  }
  
  export default Picture