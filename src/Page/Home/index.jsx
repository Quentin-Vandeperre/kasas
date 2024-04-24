import Banner from '../../Composants/Banner'
import Card from '../../Composants/Card'
import picture from '../../assets/Banner-img.jpeg'

function Home() {
    return (
    <main className='mainHome' >
        <Banner 
            picture = {picture}
        />
        <Card 
        />
    </main>
    )
  }
  
  export default Home