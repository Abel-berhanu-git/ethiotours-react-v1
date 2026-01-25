import aboutImg from '../images/about.jpg'
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      {/* section-title */}
     <Title title='about' subTitle='us'/>
      {/* end of section-title */}

      <div className='section-center about-center'>
        {/* about img container */}
        <article className='about-img'>
          <img
            src={aboutImg}
            className='about-photo'
            alt='about-img'
          />
        </article>

        {/* about info */}
        <article className='about-info'>
          <h3>Welcome to EthioTours</h3>
          <p>
            EthioTours curates authentic travel experiences across Ethiopia —
            from ancient historical sites to vibrant cultural festivals.
          </p>
          <p>
            Our local guides ensure safe, immersive, and sustainable trips
            tailored to your interests.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
