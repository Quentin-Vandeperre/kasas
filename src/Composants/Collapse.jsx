import '../styles/collapse.scss'
import React, { useState } from "react"


function Collapse({title, content}) {
    const [afficherParagraphe, setAfficherParagraphe] = useState(false);
    const [rotation, setRotation] = useState(false);

        const toggleAfficherParagraphe = () => {
            setAfficherParagraphe(!afficherParagraphe);

        }
        
        const toggleRotation = () => {
            setRotation(!rotation);
          };
        
    return (
            <div className='divCollapse'>
                <div className='oneDivTitle'>
                    <h2 className='titleCollapse'>{title}</h2>
                    <button className="buttonCollapse">
                        <i className={`fa-sharp fa-solid fa-chevron-up ${rotation ? 'rotate' : 'rotateRiverse'}`} 
                        onClick={() => {
                        toggleAfficherParagraphe();
                        toggleRotation();
                        }}>
                        </i>
                    </button>
                    {afficherParagraphe ? '' : ''}  
                </div> 
                {afficherParagraphe && (
                    <p className={`pAbout ${afficherParagraphe ? 'pOpen' : 'pClose'}`}>{content}</p>
                )}           
            </div>  
    )
  }
  export default Collapse