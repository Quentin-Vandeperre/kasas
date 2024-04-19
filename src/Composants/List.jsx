import { Link } from 'react-router-dom'
import '../styles/list.scss'

function List({title, cover}) {
    return (
        <Link to="/RentalSheet">
            <li className='liListCard'>
                <img className='listImg' src={cover} alt={title} />
                <p className='listP'>{title}</p>
            </li>
        </Link>
    )
  }
  export default List