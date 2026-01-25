const Tour = ({
  img,
  tourDate,
  tourTitle,
  tourInfo,
  region,
  duration,
  price,
}) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={img} className='tour-img' alt='tour-img' />
        <p className='tour-date'>{tourDate}</p>
      </div>
      <div className='tour-info'>
        <h4>{tourTitle}</h4>
        <p>{tourInfo}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fa-solid fa-map fa-fw'></i>
            </span>
            {region}
          </p>
          <p>
            <span>
              <i className='fa-solid fa-sun fa-fw'></i>
            </span>{' '}
            {duration} Day
          </p>
          <p className='tour-price'>from ${price}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
