import Title from './Title';
import { tours } from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      {/* section-title */}
      <Title title='featured' subTitle='tours' />
      {/* end of section-title */}

      <div className='section-center featured-center'>
        {/* single tour */}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
        {/* end of single tour */}
      </div>

      <div className='tour-btn'>
        <a href='#' className='btn'>
          all tours
        </a>
      </div>
    </section>
  );
};
export default Tours;
