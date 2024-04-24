import '../styles/card.scss'
import List from './List'
import { Link } from 'react-router-dom'
import { housingList } from '../Data/Advertisements'
import PropTypes from 'prop-types'

function Card() {
    return (
    <section className='sectionCard'>
        <ul>
            {housingList.map(({id, title, cover}) => (
                <Link to={`/RentalSheet/${id}`}>
                <List 
                    key={id}
                    title = {title}
                    cover = {cover}
                />
                </Link>
            ))
            }
        </ul>
    </section>
    )
  }
  
  export default Card

