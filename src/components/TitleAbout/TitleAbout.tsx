//Librairies
import React, { FC } from 'react'

//Styles
import { Title } from './TitleAbout.style'

type TitleAboutProps = {
  children: string
}

const TitleAbout: FC<TitleAboutProps> = ({ children }) => {
  return <Title>{children}</Title>
}

export default TitleAbout
