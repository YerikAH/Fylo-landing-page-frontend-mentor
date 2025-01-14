import { motion } from 'framer-motion'
import heroIllustration from '../../../assets/illustration-intro.png'

const HeroSection = () => {
  return (
    <section className='grid place-items-center w-full relative curvy px-4'>
      <motion.img
        src={heroIllustration}
        alt='illustration intro'
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.h1
        className='text-white text-2xl font-raleway text-center font-bold mt-4 lg:text-4xl lg:leading-normal max-w-3xl lg:tracking-wide relative'
        initial={{ opacity: 0, bottom: '-1rem' }}
        animate={{ opacity: 1, bottom: '0' }}
        transition={{ duration: 2 }}
      >
        All your files in one secure location, accessible anywhere.
      </motion.h1>
      <motion.p
        className='text-white text-sm font-open_sans text-center mt-4 px-4 lg:text-xl max-w-m39rem lg:leading-8 lg:mt-8 relative'
        initial={{ opacity: 0, bottom: '-1rem' }}
        animate={{ opacity: 1, bottom: '0' }}
        transition={{ duration: 3 }}
      >
        Fylo stores all your most important files in one secure location. Access them wherever you
        need, share and collaborate with friends family, and co-workers.
      </motion.p>
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
