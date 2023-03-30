//Librairies
import React, { FC } from 'react'

//Styles
import { GlobalButton } from './Button.style'

type Props = {
  text: string
  href: string
  size: 's' | 'md' | 'lg'
  style?: object
}

const Button: FC<Props> = ({ href, text, size, style }) => {
  return (
    <GlobalButton style={style} size={size} href={href}>
      {text}
    </GlobalButton>
  )
}

export default Button
