import heroIllustration from '../../assets/illustration-intro.png'

const HeroSection = () => {
  return (
    <section>
      <img src={heroIllustration} alt='illustration intro' />
      <h1>All your files in one secure location, accessible anywhere</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access them wherever you
        need, share and collaborate with friends family, and co-workers.
      </p>
      <button tabIndex={1}>Get Started</button>
    </section>
  )
}

export default HeroSection
