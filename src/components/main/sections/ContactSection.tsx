const ContactSection = () => {
  return (
    <article className='grid place-items-center w-full bg-blue_dark_testimonials py-10 px-5 lg:py-16 rounded-md relative top-48 max-w-4xl'>
      <h3 className='text-white text-base font-bold font-raleway text-center lg:text-3xl'>
        Get early access today
      </h3>
      <p className='text-white text-sm  font-open_sans text-center mt-4 lg:text-base max-w-3xl'>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </p>
      <div className='grid w-full lg:flex lg:mt-10 lg:gap-8 lg:max-w-3xl'>
        <input
          tabIndex={1}
          type='email'
          aria-label='Enter your email'
          aria-required='false'
          placeholder='email@example.com'
          className=' rounded-full bg-white w-full px-3.5 py-3.5 mt-8 text-xs font-open_sans lg:mt-0 lg:py-4 lg:px-4 lg:flex-initia lg:text-base input-focus'
        />
        <button
          tabIndex={1}
          type='submit'
          aria-label='Get Started For Free'
          className='text-white  text-xs w-full px-3.5 py-3.5 mt-4 font-raleway font-bold lg:mt-0 lg:flex-none lg:text-sm lg:max-w-[12.5rem] button-started'
        >
          Get Started For Free
        </button>
      </div>
    </article>
  )
}

export default ContactSection
