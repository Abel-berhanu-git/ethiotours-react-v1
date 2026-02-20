import aboutImg from '../images/about.jpg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <article className='about-img'>
          <img src={aboutImg} className='about-photo' alt='about-img' />
        </article>

        <article className='about-info'>
          <h3>Welcome to EthioTours</h3>
          <p>
            EthioTours curates authentic travel experiences across Ethiopia —
            from ancient heritage landmarks to vibrant cultural festivals.
          </p>
          <p>
            Our local experts design safe, personalized, and sustainable trips
            that blend comfort with real discovery.
          </p>

          <div className='about-highlights'>
            <span>✓ Local expert guides</span>
            <span>✓ Flexible travel plans</span>
            <span>✓ Handpicked stays</span>
          </div>

          <a href='#contact' className='btn'>
            Start your journey
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
