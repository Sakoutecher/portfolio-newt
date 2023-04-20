import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expectTypeOf } from 'vitest'
import { Button } from './Button'
import { ButtonProps } from './Button'

describe('Button', () => {
  it('button should be a function', () => {
    expectTypeOf(Button).toBeFunction()
  })

  it('button props types are all good', () => {
    const props: ButtonProps = {
      text: 'About',
      href: '/about',
      size: 'md',
      style: { display: 'flex' },
      active: true,
      onclick: () => {
        console.log('Button')
      },
    }
    expect(typeof props.text).toBe('string')
    expect(typeof props.href).toBe('string')
    expect(typeof props.size).toBe('string')
    expect(typeof props.style).toBe('object')
    expect(typeof props.active).toBe('boolean')
    expect(typeof props.onclick).toBe('function')
  })

  it('should display a button with an href and a text inside', () => {
    render(<Button text='About' size='md' href='/about' />)
    const button = screen.getByText('About')
    const hrefButton = button.getAttribute('href')
    expect(button).toBeInTheDocument()
    expect(hrefButton).toBe('/about')
  })

  it('render the right tag', () => {
    render(<Button text='About' size='md' href='/about' />)
    const button = screen.getByText('About')
    expect(button.tagName).toBe('A')
  })
})
