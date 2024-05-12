import { housingList } from '../../Data/Advertisements'
import { useNavigate, useParams} from "react-router-dom"   
import { useEffect, useState } from 'react'
import Carrousel from '../../Composants/Carrousel/Carrousel' 
import Collapse from '../../Composants/Collapse'
import Tags from '../../Composants/Carrousel/Tags'
import Picture from '../../Composants/Carrousel/Picture'
import TitleCarrousel from '../../Composants/Carrousel/TitleCarrousel' 
import Rating from '../../Composants/Carrousel/Rating'


function About() {
    const navigate = useNavigate ();
    const { id } = useParams ();
    const ficheLogement = housingList.find((logement) => logement.id === id);

    const [sheet, setSheet] = useState(null)

  useEffect(() => {
    function searchRental(id) {
      for (let i = 0; i < housingList.length; i++) {
        if (housingList[i].id === id) {
          return i
        }
      }
      return -1
    }

    const sheet = searchRental(id)
    if (sheet === -1) {
      navigate("/error")
    } else {
      setSheet(sheet)
    }
  }, [id, navigate])

  if (sheet === null) {
    return null
  }

    return (
      <main className='mainRental' >
        <Carrousel 
            data = {ficheLogement.pictures}
        />
        <div className='divDescriptionTagsPictureRating' >
          <div className='divDescriptionTags'>
            <TitleCarrousel 
                title={ficheLogement.title}
                location={ficheLogement.location}
            />
            
            <Tags 
              tags= {ficheLogement.tags.map((tag, id) => (
                <li key={id} className="tagList">
                {tag}
                </li>
                ))}
            />
          </div>
          
          <div className='divPictureRating'>
            <Picture
              name={ficheLogement.host.name} 
              picture={ficheLogement.host.picture}
            />

            <Rating 
              scaleValue = {ficheLogement.rating}
            />
          </div>
        </div>
        <section className='sectionCollapse' >
          <Collapse 
              title={"Description"}
              content= {ficheLogement.description}
          />
          
          <Collapse 
              title={"Equipement"}
              content={ficheLogement.equipments.map((equipement, id) => (
                <li key={id} className="descriptionList">
                {equipement}
                </li>
              ))}
          />
        </section>
      </main>
    )
  }
  
  export default About