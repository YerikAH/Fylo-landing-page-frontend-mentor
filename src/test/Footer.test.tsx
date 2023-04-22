import { render, screen } from '@testing-library/react'
import { Footer } from '../components/footer/Footer'
import { FOOTER_OPT_ONE, FOOTER_OPT_TWO, FOOTER_SOCIAL } from '../constant/constant'
describe('Footer', () => {
  test('Footer displays logo image', () => {
    render(<Footer />)
    const logoImage = screen.getByAltText('logo')
    expect(logoImage).toBeTruthy()
    expect(logoImage.getAttribute('src')).toBe('/src/assets/logo.svg')
  })
  test('Footer render option one', () => {
    const component = render(<Footer />)
    const listItems = component.queryAllByRole('list')[0]

    expect(listItems.childElementCount).toBe(FOOTER_OPT_ONE.length)

    FOOTER_OPT_ONE.forEach((item, index) => {
      const liEle = listItems?.childNodes[index] as HTMLElement
      const aEle = liEle.querySelector('a')

      expect(aEle?.textContent).toBe(`${item}`)
      expect(aEle?.getAttribute('tabIndex')).toBe('1')
    })
  })
  test('Footer render option two', () => {
    const component = render(<Footer />)
    const listItems = component.queryAllByRole('list')[1]

    expect(listItems.childElementCount).toBe(FOOTER_OPT_TWO.length)

    FOOTER_OPT_TWO.forEach((item, index) => {
      const liEle = listItems?.childNodes[index] as HTMLElement
      const aEle = liEle.querySelector('a')

      expect(aEle?.textContent).toBe(`${item}`)
      expect(aEle?.getAttribute('tabIndex')).toBe('1')
    })
  })

  test('Footer render social media', () => {
    const component = render(<Footer />)
    const listItems = component.queryAllByRole('list')[2]

    expect(listItems.childElementCount).toBe(FOOTER_SOCIAL.length)

    FOOTER_SOCIAL.forEach((item, index) => {
      const liEle = listItems?.childNodes[index] as HTMLElement
      const aEle = liEle.querySelector('a')

      expect(aEle?.textContent).toBe(`${item}`)
      expect(aEle?.getAttribute('tabIndex')).toBe('1')
    })
  })
})
