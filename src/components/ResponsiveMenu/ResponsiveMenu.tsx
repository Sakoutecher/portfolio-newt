//Librairies
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

//Styles
import { MenuResponsiveContainer } from './ResponsiveMenu.style'

type ResponsiveMenuProps = {
  active: boolean
}

export const ResponsiveMenu: FC<ResponsiveMenuProps> = ({ active }) => {
  return (
    <MenuResponsiveContainer active={active}>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
    </MenuResponsiveContainer>
  )
}
