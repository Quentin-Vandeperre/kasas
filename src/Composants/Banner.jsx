import '../styles/banner.scss'

function Banner({picture}) {
    return (
    <section className='sectionBanner'>
      <div>
          <img src={picture} alt='paysage' className='lmj-logo' />
          <p>Chez vous, partout et ailleurs.</p>
      </div>
    </section>
    )
  }
  
  export default Banner