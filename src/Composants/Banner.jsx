import '../styles/banner.scss'

function Banner({picture}) {
    return (
    <section className='sectionBanner'>
      
          <img src={picture} alt='paysage' className='imgBanner' />
          <p className='pBanner' >Chez vous, partout et ailleurs.</p>
      
    </section>
    )
  }
  
  export default Banner