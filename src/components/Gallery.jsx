const Gallery = ({img}) => {
  return (
    <article className='gallery-img-container'>
      <img
        src={img}
        alt='gallery img'
        className='gallery-img'
      />
      <a href='#' className='gallery-icon' onClick={(e)=>{e.preventDefault()}}>
        <i className='fa-solid fa-magnifying-glass'></i>
      </a>
    </article>
  );
}
export default Gallery