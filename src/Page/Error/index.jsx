import { Link } from "react-router-dom"
import '../../styles/error.scss'

function Error() {
    return (
      <main className="error" >
        <p className="errorType">404</p>
        <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="errorLink" to="/">Retourner sur la page d’accueil</Link>
      </main>
    )
  }
  
  export default Error