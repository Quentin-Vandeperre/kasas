import '../styles/collapse.scss'


function List({title, content}) {
    return (
        <li>
            <div className='oneDivTitle'>
                <h2 className='titleCollapse'>{title}</h2>
                <button className='buttonCollapse'><i className="fa-sharp fa-solid fa-chevron-up"></i></button>
            </div> 
            <div className='box'>
                <p className='pAbout'>{content}</p>  
            </div>              
        </li>
        
    )
  }
  export default List