import Banner from '../../Composants/Banner'
import { housingList } from '../../Data/Advertisements'


function About() {
    console.log(housingList.title)
    return (
      <main>
            {housingList.map(({id, cover}) => (
                <Banner 
                    key={id}
                    picture = {cover}
                />
            ))
            }
      </main>
    )
  }
  
  export default About