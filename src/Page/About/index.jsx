import Collapse from '../../Composants/Collapse'
import Banner from '../../Composants/Banner'
import picture from '../../assets/About-img.jpeg'

function About() {
  return (
    <main>
          <Banner 
            picture = {picture}
          />
          <Collapse 
          />
    </main>
  )
}

export default About