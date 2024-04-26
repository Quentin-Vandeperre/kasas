import '../styles/card.scss'
import List from './List'
import { Link } from 'react-router-dom'
import { housingList } from '../Data/Advertisements'


function Card() {
    return (
    <section className='sectionCard'>
        <ul>
            {housingList.map(({title, cover, id}) => (
                <Link to={`/RentalSheet/${id}`}>
                <List 
                    id = {id}
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

