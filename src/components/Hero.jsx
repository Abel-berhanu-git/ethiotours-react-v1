const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <p className='hero-eyebrow'>Premium Ethiopian Travel Experiences</p>
        <h1>Explore Ethiopia in Style</h1>
        <p>
          Discover curated adventures across Ethiopia with expert local guides,
          seamless planning, and unforgettable cultural moments.
        </p>

        <div className='hero-actions'>
          <a href='#tours' className='btn hero-btn'>
            Explore tours
          </a>
          <a href='#contact' className='btn hero-btn hero-btn-outline'>
            Plan my trip
          </a>
        </div>

        <div className='hero-stats'>
          <article>
            <h4>25+</h4>
            <p>Curated destinations</p>
          </article>
          <article>
            <h4>4.9/5</h4>
            <p>Average traveler rating</p>
          </article>
          <article>
            <h4>10K+</h4>
            <p>Happy explorers</p>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Hero;
