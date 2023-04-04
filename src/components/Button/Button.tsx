//Librairies
import React, { FC } from 'react'

//Styles
import { GlobalButton } from './Button.style'

type Props = {
  text: string
  href?: string
  size: 's' | 'md' | 'lg'
  style?: object
  active?: boolean
  onclick?: () => void
}

const Button: FC<Props> = ({ href, text, size, style, active, onclick }) => {
  return (
    <GlobalButton
      style={style}
      size={size}
      href={href}
      onClick={onclick}
      active={active}
    >
      {text}
    </GlobalButton>
  )
}

export default Button
