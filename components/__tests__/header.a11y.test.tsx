import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../header'

describe('Header accessibility', () => {
  it('toggles aria-expanded on menu button', () => {
    render(<Header />)
    const button = screen.getByLabelText('Menu principal')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
