import { fireEvent, render } from '@testing-library/react'
import ContactSection from '../components/main/sections/ContactSection'
import { FORM_ERROR_EMAIL, FORM_ERROR_LITTLE, FORM_ERROR_VOID } from '../constant/constant'
describe('ContactSection', () => {
  test('Test the error', () => {
    const component = render(<ContactSection />)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const inputElement = component.container.querySelector('input')!
    const buttonElement = component.getByText('Get Started For Free')

    fireEvent.change(inputElement, { target: { value: 'email_not_valid' } })
    fireEvent.click(buttonElement)

    expect(component.getByText(FORM_ERROR_EMAIL))

    fireEvent.change(inputElement, { target: { value: '' } })
    fireEvent.click(buttonElement)

    expect(component.getByText(FORM_ERROR_VOID))

    fireEvent.change(inputElement, { target: { value: 'daqe' } })
    fireEvent.click(buttonElement)

    expect(component.queryByText(FORM_ERROR_LITTLE, { exact: false }))
  })
})
