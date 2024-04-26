import '../../styles/Carrousel/rating.scss'

function Rating({scaleValue}) {
    const range = [1, 2, 3, 4, 5]
         
    return (
    <section className='sectionRating'>
        <div className='divStar' >
          {range.map((rangeElem) => 
            scaleValue >= rangeElem ? 
            <li><i className="fa-solid fa-star starPink"></i></li> :
            <li><i className="fa-solid fa-star starGrey"></i></li> 
          )
          }
        </div>
    </section>
    )
  }
  
  export default Rating
