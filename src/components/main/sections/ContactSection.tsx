const ContactSection = () => {
  return (
    <article className='grid place-items-center w-full bg-blue_dark_testimonials py-10 px-5 rounded-md relative top-48'>
      <h3 className='text-white text-base font-bold font-open_sans text-center'>
        Get early access today
      </h3>
      <p className='text-white text-sm  font-open_sans text-center mt-4'>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </p>
      <div className='grid w-full'>
	<input
	  tabIndex={1}
	  type='email'
	  aria-label='Enter your email'
	  aria-required='false'
          placeholder='email@example.com'
          className=' rounded-full bg-white w-full px-3.5 py-3.5 mt-8 text-xs font-open_sans'
        />
	<input
	  tabIndex={1}
	  type='submit'
	  aria-label="Get Started For Free"
          value='Get Started For Free'
          className='text-white bg-cyan rounded-full text-xs w-full px-3.5 py-3.5 mt-4 font-raleway font-bold'
        />
      </div>
    </article>
  )
}

export default ContactSection
