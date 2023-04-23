import { motion } from 'framer-motion'
import { TESTIMONY_BOX } from '../../../constant/constant'

const TestimonySection = () => {
  return (
    <motion.article
      className='grid place-items-center w-full mt-44 gap-10 px-3 lg:grid-cols-auto_3 lg:place-content-center relative'
      initial={{ left: '-3rem', opacity: 0 }}
      whileInView={{ left: '0', opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {TESTIMONY_BOX.map((item, idx) => (
        <div
          className={
            'bg-blue_dark_testimonials px-4 py-4 rounded max-w-sm lg:px-6 lg:pt-8 lg:pb-6 relative' +
            `${idx === 0 && ' quotes'}`
          }
          key={item.id}
        >
          <p className='text-white text-xs  font-open_sans text-left mt-2 leading-5 lg:text-base'>
            {item.testimony}
          </p>
          <div className='flex items-center mt-4 gap-2 lg:mt-8'>
            <img src={item.image} alt='profile' className='w-8 rounded-full lg:w-6' />
            <div className='grid justify-start items-center'>
              <p className='text-white text-xs  font-raleway text-left font-bold tracking-widest'>
                {item.name}
              </p>
              <span className='text-white font-open_sans text-left testimony-job tracking-widest'>
                {item.job}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.article>
  )
}
export default TestimonySection
