
import '../styles/list.scss'

function List({title, cover}) {
    return (
            <li className='liListCard'>
                <img className='listImg' src={cover} alt={title} />
                <p className='listP'>{title}</p>
            </li>
    )
  }
  export default List