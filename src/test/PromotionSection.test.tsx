import { render, screen } from '@testing-library/react'
import PromotionSection from '../components/main/sections/PromotionSection'

describe('PromotionSection', () => {
  test('Test images', () => {
    render(<PromotionSection />)
    const image = screen.getByAltText('illustration stay productive')
    const iconImage = screen.getByAltText('arrow')

    expect(iconImage).toBeTruthy()
    expect(iconImage.getAttribute('src')).toBe('/src/assets/icon-arrow.svg')
    expect(image).toBeTruthy()
    expect(image.getAttribute('src')).toBe('/src/assets/illustration-stay-productive.png')
  })
})
