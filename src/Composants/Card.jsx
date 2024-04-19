import '../styles/card.scss'
import List from './List'
import { housingList } from '../Data/Advertisements'
import PropTypes from 'prop-types'

function Card() {
    return (
    <section className='sectionCard'>
        <ul>
            {housingList.map(({id, title, cover}) => (
                <List 
                    key={id}
                    title = {title}
                    cover = {cover}
                />
            ))
            }
        </ul>
    </section>
    )
  }
  
  export default Card

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
  }