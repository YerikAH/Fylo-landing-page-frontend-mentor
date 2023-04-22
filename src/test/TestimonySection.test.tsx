import { render } from '@testing-library/react'
import TestimonySection from '../components/main/sections/TestimonySection'
import { TESTIMONY_BOX } from '../constant/constant'
describe('TestimonySection', () => {
  test('Render items features', () => {
    const component = render(<TestimonySection />)
    const listItems = component.container.querySelector('article')

    expect(listItems?.childElementCount).toBe(TESTIMONY_BOX.length)

    TESTIMONY_BOX.forEach((item, index) => {
      const listItem = listItems?.childNodes[index] as HTMLElement
      const text = listItem.querySelector('p')
      const card = listItem.querySelector('div') as HTMLElement
      const img = card.querySelector('img')
      const info = card.querySelector('div') as HTMLElement
      const textName = info.querySelector('p')
      const spanJob = info.querySelector('span')

      expect(text?.textContent).toBe(`${item.testimony}`)
      expect(img?.getAttribute('src')).toBe(`${item.image}`)
      expect(textName?.textContent).toBe(`${item.name}`)
      expect(spanJob?.textContent).toBe(`${item.job}`)
    })
  })
})
