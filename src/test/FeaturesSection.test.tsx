import FeaturesSection from '../components/main/sections/FeaturesSection'
import { render, screen } from '@testing-library/react'
describe('FeaturesSection', () => {
  test('Render items features', () => {
    render(<FeaturesSection />)
  })
})
