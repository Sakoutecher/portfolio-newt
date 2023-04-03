//Librairies
import React, { FC } from 'react'

//Styles
import { Description } from './DescriptionAbout.style'

type DescriptionAboutProps = {
  children: string
}

const DescriptionAbout: FC<DescriptionAboutProps> = ({ children }) => {
  return <Description>{children}</Description>
}

export default DescriptionAbout
