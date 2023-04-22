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
  test('Section has the class curvy', () => {
    const component = render(<HeroSection />)
    const section = component.container.querySelector('section')
    expect(section?.getAttribute('class')).contains('curvy')
  })
  test('The correct text', () => {
    const component = render(<HeroSection />)
    const descriptionElement = component.getByText(/Fylo stores all your most important files/i)
    expect(descriptionElement.textContent).toBe(
      'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.',
    )
  })
})
