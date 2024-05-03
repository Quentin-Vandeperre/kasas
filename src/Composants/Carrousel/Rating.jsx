import '../../styles/Carrousel/rating.scss'
// import { housingList } from '../Data/Advertisements'

function Rating({scaleValue}) {
    const range = [1, 2, 3, 4, 5]
  
         
    return (
    <section className='sectionRating'>
        <div className='divStar' >
        {range.map((rangeElem) => 
          scaleValue >= rangeElem ? 
          <li key={rangeElem.toString()}><i className="fa-solid fa-star starPink"></i></li> :
          <li key={rangeElem.toString()}><i className="fa-solid fa-star starGrey"></i></li> 
        )
        }
        </div>
    </section>
    )
  }
  
  export default Rating



  