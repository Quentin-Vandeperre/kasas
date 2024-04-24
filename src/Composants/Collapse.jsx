import '../styles/collapse.scss'
import React, { useState } from "react"


function Collapse({title, content}) {
    const [afficherParagraphe, setAfficherParagraphe] = useState(false);

        const toggleAfficherParagraphe = () => {
            setAfficherParagraphe(!afficherParagraphe);
        }
        
        
    return (
        <section className='sectionCollapse'>
            <ul>
                <div className='oneDivTitle'>
                    <h2 className='titleCollapse'>{title}</h2>
                    <button className='buttonCollapse' onClick={toggleAfficherParagraphe}><i className="fa-sharp fa-solid fa-chevron-up"></i></button>
                    {afficherParagraphe ? '' : ''} 
                </div> 
                {afficherParagraphe && (
                    <p className='pAbout'>{content}</p>
                )}              
            </ul>
        </section>
        
    )
  }
  export default Collapse