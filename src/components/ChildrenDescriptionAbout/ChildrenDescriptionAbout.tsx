//Librairies
import React, { FC } from 'react'

//Styles
import { Description } from './ChildrenDescriptionAbout.style'

type ChildrenDescriptionAboutProps = {
  children: string
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

const ChildrenDescriptionAbout: FC<ChildrenDescriptionAboutProps> = ({
  children,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <Description
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Description>
  )
}

export default ChildrenDescriptionAbout
