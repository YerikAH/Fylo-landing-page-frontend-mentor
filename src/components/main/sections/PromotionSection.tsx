// images
import illustrationProductive from '../../../assets/illustration-stay-productive.png'
import iconArrow from '../../../assets/icon-arrow.svg'
import { motion } from 'framer-motion'

const PromotionSection = () => {
  return (
    <article className='grid place-items-center w-full mt-44 lg:grid-cols-auto_2'>
      <div className='grid place-items-center w-full h-full'>
        <motion.img
          src={illustrationProductive}
          alt='illustration stay productive'
          className='relative'
          initial={{ left: '-1rem', opacity: 0 }}
          whileInView={{ left: '0', opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>
      <motion.div
        className='lg:content-center lg:justify-start grid w-full h-full relative'
        initial={{ right: '-1rem', opacity: 0 }}
        whileInView={{ right: '0', opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h2 className='text-white text-lg font-raleway text-left mt-4 font-bold lg:text-4xl max-w-md lg:leading-snug'>
          Stay productive, wherever you are
        </h2>
        <p className='text-white text-sm  font-open_sans text-left mt-2 max-w-xl lg:mt-4 lg:text-base'>
          Never let location be ans issue when accessing your files. Fylo has you convered for all
          of your file sotrage needs.
          <br />
          <br />
          Securely share files and folders with friends, family and colleagues for live
          acollaboration. No email attachments required.
        </p>

        <a
          className='flex gap-2 items-center mt-4 lg:mt-6 how-fylo-button relative max-w-fit text-focus'
          tabIndex={1}
        >
          <span className='text-cyan text-sm font-open_sans text-left lg:text-base '>
            See how Fylo works
          </span>
          <img src={iconArrow} alt='arrow' />
        </a>
      </motion.div>
    </article>
  )
}

export default PromotionSection
