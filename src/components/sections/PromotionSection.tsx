// images
import illustrationProductive from '../../assets/illustration-stay-productive.png'
import iconArrow from '../../assets/icon-arrow.svg'

const PromotionSection = () => {
  return (
    <section className='grid place-items-center w-full'>
      <div className='box-grid-one'>
        <img src={illustrationProductive} alt='illustration stay productive' />
      </div>
      <div className='box-grid-two'>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be ans issue when accessing your files. Fylo has you convered for all
          of your file sotrage needs.
          <br />
          Securely share files and folders with friends, family and colleagues for live
          acollaboration. No email attachments required.
        </p>
        <div className='box-button'>
          <button>
            <span>See how Fylo works</span>
            <span>
              <img src={iconArrow} alt='arrow' />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromotionSection
