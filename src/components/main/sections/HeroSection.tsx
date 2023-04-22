import heroIllustration from '../../../assets/illustration-intro.png'

const HeroSection = () => {
  return (
    <section className='grid place-items-center w-full relative curvy px-4'>
      <img src={heroIllustration} alt='illustration intro' />
      <h1 className='text-white text-2xl font-raleway text-center font-bold mt-4 lg:text-4xl lg:leading-normal max-w-3xl lg:tracking-wide'>
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className='text-white text-sm font-open_sans text-center mt-4 px-4 lg:text-xl max-w-m39rem lg:leading-8 lg:mt-8'>
        Fylo stores all your most important files in one secure location. Access them wherever you
        need, share and collaborate with friends family, and co-workers.
      </p>
      <button
        tabIndex={1}
        className='mt-8 text-white text-sm py-4 px-24  text-center  font-bold  font-raleway button-started '
        aria-label='Start using Fylo'
      >
        Get Started
      </button>
    </section>
  )
}

export default HeroSection
