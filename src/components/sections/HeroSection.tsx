import heroIllustration from '../../assets/illustration-intro.png'

const HeroSection = () => {
  return (
    <section className='grid place-items-center w-full'>
      <img src={heroIllustration} alt='illustration intro' />
      <h1 className='text-white text-2xl font-serif text-center font-bold'>
        All your files in one secure location, accessible anywhere
      </h1>
      <p className='text-white text-sm font-sans text-center'>
        Fylo stores all your most important files in one secure location. Access them wherever you
        need, share and collaborate with friends family, and co-workers.
      </p>
      <button tabIndex={1}>Get Started</button>
    </section>
  )
}

export default HeroSection
