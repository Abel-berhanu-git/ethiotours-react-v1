import { testimonials } from '../data';
import Title from './Title';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section className='section testimonials' id='testimonials'>
      <div className='section-center'>
        <Title title='traveler' subTitle='stories' />
        <p className='testimonials-intro'>
          Real travelers, real memories — hear what guests loved most about our
          immersive Ethiopia experiences.
        </p>

        <div className='testimonials-center'>
          {testimonials.map((testimonial) => {
            return <Testimonial key={testimonial.id} {...testimonial} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
