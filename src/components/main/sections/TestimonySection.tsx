import { TESTIMONY_BOX } from '../../../constant/constant'

export const TestimonySection = () => {
  return (
    <section className='grid place-items-center w-full mt-44 gap-10 px-3'>
      {TESTIMONY_BOX.map((item) => (
        <div className='bg-blue_dark_testimonials px-4 py-4 rounded' key={item.id}>
          <p className='text-white text-xs  font-open_sans text-left mt-2 leading-5'>
            {item.testimony}
          </p>
          <div className='flex items-center mt-4 gap-2'>
            <img src={item.image} alt='profile' className='w-8 rounded-full' />
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
    </section>
  )
}
