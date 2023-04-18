import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('should display a button with an href and a text inside', () => {
    render(<Button text='About' size='md' href='/about' />)
    const button = screen.getByText('About')
    const hrefButton = button.getAttribute('href')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('href')).toBe(hrefButton)
  })
})
