import { FEATURES_BOX } from '../../../constant/constant'

const FeaturesSection = () => {
  return (
    <article
      className='grid place-items-center w-full gap-24 pt-44 lg:grid-cols-auto_2 lg:place-content-center'
      role='list'
    >
      {FEATURES_BOX.map((item) => (
        <div className='grid place-items-center max-w-sm ' key={item.id} role='listitem'>
          <img src={item.image} alt={'icon ' + item.title} className='w-16 lg:w-auto' />
          <h3 className='text-white text-base font-raleway text-center font-bold mt-6 lg:text-lg'>
            {item.title}
          </h3>
          <p className='text-white text-sm font-open_sans text-center mt-2'>{item.description}</p>
        </div>
      ))}
    </article>
  )
}

export default FeaturesSection
