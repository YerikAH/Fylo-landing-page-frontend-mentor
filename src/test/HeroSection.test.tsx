import HeroSection from '../components/main/sections/HeroSection'
import { render, screen } from '@testing-library/react'
describe('HeroSection', () => {
  test('HeroSection display image', () => {
    render(<HeroSection />)
    const imageHero = screen.getByAltText('illustration intro')
    expect(imageHero).toBeTruthy()
    expect(imageHero.getAttribute('src')).toBe('/src/assets/illustration-intro.png')
  })
  test('button has correct class', () => {
    render(<HeroSection />)
    const button = screen.getByText('Get Started')
    expect(button.getAttribute('class')).contains('button-started')
  })
})
