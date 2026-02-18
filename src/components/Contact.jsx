const Contact = () => {
  return (
    <section className='section contact' id='contact'>
      <div className='section-center contact-center'>
        <article className='contact-title'>
          <h3>Want the latest tours and travel updates?</h3>
          <p>Join our newsletter and get inspiring Ethiopia itineraries first.</p>
        </article>

        <form className='contact-form'>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Enter your email'
          />
          <button type='submit' className='submit-btn'>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
