import '../../styles/Carrousel/tags.scss'


function Tags({tags}) {
         
    return (
    <section className='sectionTags'>
        <ul className='ulTags' >
            {tags}
        </ul>
    </section>
    )
  }
  
  export default Tags