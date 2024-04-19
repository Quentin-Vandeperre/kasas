import { aboutList } from'../Data/AboutList'
import AboutList from './AboutList'
// import React, { useState } from 'react';

function Collapse() {
    return (
    <section className='sectionCollapse'>
        <ul>
            {aboutList.map(({id, title, content}) => (
                <AboutList 
                    key={id}
                    title = {title}
                    content = {content}
                />
            ))
            }
        </ul>
    </section>
    )
  }
  
  export default Collapse

  


// function Collapse() {

//         const [afficherParagraphe, setAfficherParagraphe] = useState(false);

//         const toggleAfficherParagraphe = () => {
//             setAfficherParagraphe(!afficherParagraphe);
//     }

//     return (
//     <section className='sectionCollapse'>
//         <div className='allDivTitle' >
//             <div className='oneDivTitle'>
//                 <h2 className='titleCollapse'>Fiabilité</h2>
//                 <button className='buttonCollapse' onClick={toggleAfficherParagraphe}><i class="fa-sharp fa-solid fa-chevron-up"></i></button>
//                 {afficherParagraphe ? '' : ''} 
//             </div>
//             {afficherParagraphe && (
//                 <p>
//                 Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
//                 </p>
//             )}
//             <div className='oneDivTitle'>
//                 <h2 className='titleCollapse'>Respect</h2>
//                 <button className='buttonCollapse' ><i class="fa-sharp fa-solid fa-chevron-up"></i></button>
//             </div>
//             <div className='oneDivTitle'>
//                 <h2 className='titleCollapse'>Service</h2>
//                 <button className='buttonCollapse' ><i class="fa-sharp fa-solid fa-chevron-up"></i></button>
//             </div>
//             <div className='oneDivTitle'>
//                 <h2 className='titleCollapse'>Sécurité</h2>
//                 <button className='buttonCollapse' ><i class="fa-sharp fa-solid fa-chevron-up"></i></button>
//             </div>
//         </div>
//     </section>
//     )
//   }
  
//   export default Collapse