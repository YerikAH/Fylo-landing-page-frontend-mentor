import { FEATURES_BOX } from '../../constant/constant'

const FeaturesSection = () => {
  return (
    <section className='grid place-items-center w-full gap-24 mt-44'>
      {FEATURES_BOX.map((item) => (
        <div className='grid place-items-center' key={item.id}>
          <img src={item.image} alt={'icon ' + item.title} />
          <h3 className='text-white text-base font-raleway text-center font-bold mt-6'>
            {item.title}
          </h3>
          <p className='text-white text-sm font-open_sans text-center  mt-2'>{item.description}</p>
        </div>
      ))}
    </section>
  )
}

export default FeaturesSection
