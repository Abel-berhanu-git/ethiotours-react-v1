const Testimonial = ({ quote, name, country, trip, rating }) => {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className='testimonial-card'>
      <div className='testimonial-top'>
        <span className='testimonial-quote-icon'>“</span>
        <div className='testimonial-stars' aria-label={`Rated ${rating} out of 5`}>
          {Array.from({ length: rating }).map((_, index) => {
            return <i key={index} className='fa-solid fa-star'></i>;
          })}
        </div>
      </div>

      <p className='testimonial-text'>{quote}</p>

      <div className='testimonial-person'>
        <span className='testimonial-avatar' aria-hidden='true'>
          {initials}
        </span>
        <div>
          <h4>{name}</h4>
          <p>
            {country} · {trip}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
