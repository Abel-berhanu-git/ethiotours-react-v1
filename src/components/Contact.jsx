const Contact = () => {
  return (
    <section className='section contact' id='contact'>
      <div className='section-center contact-center'>
        {/* <!-- contact-title --> */}
        <article className='contact-title'>
          <h3>when latest tour info and updates?</h3>
          <p>sign up for newsletter and stay up to date</p>
        </article>

        {/* <!-- contact-form --> */}
        <form className='contact-form'>
          {/* <!-- input --> */}
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='your email'
          />
          {/* <!-- button --> */}
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
