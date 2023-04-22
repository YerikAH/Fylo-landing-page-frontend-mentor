import FeaturesSection from '../components/main/sections/FeaturesSection'
import { render } from '@testing-library/react'
import { FEATURES_BOX } from '../constant/constant'

describe('FeaturesSection', () => {
  test('Render items features', () => {
    render(<FeaturesSection />)
    const component = render(<FeaturesSection />)
    const listItems = component.container.querySelector('article')

    expect(listItems?.childElementCount).toBe(FEATURES_BOX.length)

    FEATURES_BOX.forEach((feature, index) => {
      const listItem = listItems?.childNodes[index] as HTMLElement
      const image = listItem.querySelector('img')
      const title = listItem.querySelector('h3')
      const description = listItem.querySelector('p')

      expect(image?.getAttribute('alt')).toBe(`icon ${feature.title}`)
      expect(image?.getAttribute('src')).toBe(`${feature.image}`)
      expect(title?.textContent).toBe(feature.title)
      expect(description?.textContent).toBe(feature.description)
    })
  })
})
