// images
import illustrationProductive from '../../../assets/illustration-stay-productive.png'
import iconArrow from '../../../assets/icon-arrow.svg'

const PromotionSection = () => {
  return (
    <section className='grid place-items-center w-full mt-44'>
      <div className='box-grid-one'>
        <img src={illustrationProductive} alt='illustration stay productive' />
      </div>
      <div className='box-grid-two'>
        <h2 className='text-white text-lg font-raleway text-left mt-4 font-bold'>
          Stay productive, wherever you are
        </h2>
        <p className='text-white text-sm  font-open_sans text-left mt-2'>
          Never let location be ans issue when accessing your files. Fylo has you convered for all
          of your file sotrage needs.
          <br />
          <br />
          Securely share files and folders with friends, family and colleagues for live
          acollaboration. No email attachments required.
        </p>

        <a className='flex gap-2 items-center mt-4' tabIndex={1}>
          <span className='text-cyan text-sm font-open_sans text-left'>See how Fylo works</span>
          <img src={iconArrow} alt='arrow' />
        </a>
      </div>
    </section>
  )
}

export default PromotionSection
