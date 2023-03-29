import { TESTIMONY_BOX } from '../../../constant/constant'

export const TestimonySection = () => {
  return (
    <section className='grid place-items-center w-full mt-44'>
      {TESTIMONY_BOX.map((item) => (
        <div className='grid-item-testi' key={item.id}>
          <p className='text-white text-sm  font-open_sans text-left mt-2'>{item.testimony}</p>
          <div className='grid-item-user'>
            <img src={item.image} alt='profile' className='w-8 rounded-s-full' />
            <div className='grid-item-user_column'>
              <p className='text-white text-sm  font-open_sans text-left mt-2'>{item.name}</p>
              <span className='text-white text-sm  font-open_sans text-left mt-2'>{item.job}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
