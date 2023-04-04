//Librairies
import React, { FC } from 'react'

//Styles
import { GlobalTag } from './Tag.style'

type Props = {
  text: string
  size: 's' | 'md' | 'lg'
  style?: object
  main: boolean
}

const Tag: FC<Props> = ({ text, size, style, main }) => {
  return (
    <GlobalTag style={style} size={size} href={'#'} main={main}>
      {text}
    </GlobalTag>
  )
}

export default Tag
