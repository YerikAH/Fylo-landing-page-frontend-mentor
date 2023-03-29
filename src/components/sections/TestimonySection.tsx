import { TESTIMONY_BOX } from '../../constant/constant'

export const TestimonySection = () => {
  return (
    <section>
      {TESTIMONY_BOX.map((item) => (
        <div className='grid-item-testi' key={item.id}>
          <p>{item.testimony}</p>
          <div className='grid-item-user'>
            <img src={item.image} alt='profile' />
            <div className='grid-item-user_column'>
              <p>{item.name}</p>
              <span>{item.job}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
