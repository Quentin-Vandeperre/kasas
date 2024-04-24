import { housingList } from '../../Data/Advertisements'
import { useParams} from "react-router-dom"   
import Carrousel from '../../Composants/Carrousel' 
import Collapse from '../../Composants/Collapse'
import DescriptionCarrousel from '../../Composants/DescriptionCarrousel' 
import Rating from '../../Composants/Rating'

function About() {
    const { id } = useParams () ;
    const ficheLogement = housingList.find((logement) => logement.id === id);

    return (
      <main className='mainRental' >
        <Carrousel 
            data = {ficheLogement.pictures}
        />
        <DescriptionCarrousel 
            title={ficheLogement.title}
            location={ficheLogement.location}
            name={ficheLogement.host.name}
            picture={ficheLogement.host.picture}
        />
        <Rating 
          tags= {ficheLogement.tags.map((tag, id) => (
          <li key={id} className="tagList">
          {tag}
          </li>
          ))}
          scaleValue = {ficheLogement.rating}
        />
        <div className='divCollapseRental' >
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
        </div>
      </main>
    )
  }
  
  export default About