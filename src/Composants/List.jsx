
import '../styles/list.scss'
import PropTypes from 'prop-types'

function List({title, cover, id}) {
    return (
            <li className='liListCard' key={id}>
                <img className='listImg' src={cover} alt={title} />
                <p className='listP'>{title}</p>
            </li>
    )
  }

  export default List

  