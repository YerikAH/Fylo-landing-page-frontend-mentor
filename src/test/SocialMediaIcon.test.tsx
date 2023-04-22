import { render, screen } from '@testing-library/react'
import SocialMediaIcon from '../components/ui/SocialMediaIcon'
import { PropsSocial } from '../interface/interface'
import '@testing-library/jest-dom'

describe('PromotionSection', () => {
  const testProps: PropsSocial = {
    url: 'https://example.com',
    children: <div>Test Icon</div>,
  }
  test('Test props', () => {
    render(<SocialMediaIcon {...testProps} />)
    const iconLink = screen.getByRole('link')
    const icon = screen.getByText('Test Icon')
    expect(iconLink).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
