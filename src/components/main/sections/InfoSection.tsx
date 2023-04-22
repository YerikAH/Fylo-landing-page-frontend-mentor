import ContactSection from './ContactSection'
import FeaturesSection from './FeaturesSection'
import PromotionSection from './PromotionSection'
import TestimonySection from './TestimonySection'

const InfoSection = () => {
  return (
    <section className='max-w-none bg-blue_dark_main_bg px-6'>
      <FeaturesSection />
      <PromotionSection />
      <TestimonySection />
      <ContactSection />
    </section>
  )
}

export default InfoSection
