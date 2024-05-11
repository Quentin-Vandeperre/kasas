import '../styles/footer.scss'
import logo from '../assets/logoKasaFooter.png'

function Header() {
  return (
    
    <footer>
        <img src={logo} alt='logo kasa' className='logoFooter' />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Header