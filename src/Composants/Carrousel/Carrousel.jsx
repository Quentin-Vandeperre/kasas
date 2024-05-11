import '../../styles/Carrousel/carrousel.scss'
import { useState } from "react";

    function Carrousel ({ data }){
        const [slide, setSlide] = useState(0);

        const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
        };

        const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
        };

    return (
    <section className='sectionCarrousel'>
      
      {data.map((item, index) => {
        return (
          <div className='divPictureIndex'> 
            <img src={item} key={index} alt="photo du logement" className={slide === index ? "slide" : "slide slideHidden"}/>
            <p className={slide === index ? "index" : "index indexHidden"}>{index+1}/{data.length}</p>
          </div>
        );
      })}
      
            <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
            <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
      
    </section>
    )
  }
  
  export default Carrousel