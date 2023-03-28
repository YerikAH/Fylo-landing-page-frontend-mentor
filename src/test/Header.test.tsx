import Header from '../components/Header'
import { render, screen } from '@testing-library/react'
describe('Header', () => {
  test('Renders all navigation options', () => {
    render(<Header />)
    const navOptions = screen.getAllByText(/Features|Team|Sign in/)
    expect(navOptions).toHaveLength(3)
  })
  test('Header displays logo image', () => {
    render(<Header />)
    const logoImage = screen.getByAltText('logo')
    expect(logoImage).toBeTruthy()
    expect(logoImage.getAttribute('src')).toBe('/src/assets/logo.svg')
  })
})
