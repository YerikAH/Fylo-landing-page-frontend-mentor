// components
import ContactSection from './sections/ContactSection'
import FeaturesSection from './sections/FeaturesSection'
import HeroSection from './sections/HeroSection'
import PromotionSection from './sections/PromotionSection'
import { TestimonySection } from './sections/TestimonySection'

const Main = () => {
  return (
    <main className='px-6 py-6 w-full'>
      <HeroSection />
      <FeaturesSection />
      <PromotionSection />
      <TestimonySection />
      <ContactSection />
    </main>
  )
}
export default Main
