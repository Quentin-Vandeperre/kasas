import { Link } from 'react-router-dom'
import logo from '../assets/logoKasa.png'
import '../styles/header.scss'

function Header() {
  return (
    <header>
        <div>
          <img src={logo} alt='logo kasa' className='logo' />
          <nav>
          <Link to="/">Accueil</Link>
          <Link to="/About">A Propos</Link>
          </nav>
        </div>
    </header>
  )
}
export default Header