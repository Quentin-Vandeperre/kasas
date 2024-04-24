import '../styles/rating.scss'
import { housingList } from '../Data/Advertisements'




function Rating({tags, scaleValue}) {
    const range = [1, 2, 3, 4, 5]
         
    return (
    <section className='sectionRating'>
        <ul>
            {tags}
        </ul>
        <div className='divStar' >
          {range.map((rangeElem) => 
            scaleValue >= rangeElem ? 
            <li><i class="fa-solid fa-star starPink"></i></li> :
            <li><i class="fa-solid fa-star starGrey"></i></li> 
          )
          }
        </div>
    </section>
    )
  }
  
  export default Rating

//   <li><i class="fa-duotone fa-star starBlack"></i></li> :
//             <li><i class="fa-duotone fa-star starGrey"></i></li> 