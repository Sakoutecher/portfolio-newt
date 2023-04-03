//Librairies
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

//Styles
import {
  NavbarContainer,
  LinksContainer,
  NavbarLinks,
  PseudoElement,
} from './Navbar.style'

//Components
import Button from '../Button/Button'

const Navbar = () => {
  const location = useLocation()

  return (
    <NavbarContainer>
      <LinksContainer>
        <PseudoElement active={location.pathname === '/' ? true : false}>
          <Link to='/'>
            <NavbarLinks>ACCUEIL</NavbarLinks>
          </Link>
        </PseudoElement>
        <PseudoElement active={location.pathname === '/about' ? true : false}>
          <Link to='/about'>
            <NavbarLinks>A PROPOS</NavbarLinks>
          </Link>
        </PseudoElement>
        <PseudoElement
          active={location.pathname === '/projects' ? true : false}
        >
          <Link to='projects'>
            <NavbarLinks>PROJETS</NavbarLinks>
          </Link>
        </PseudoElement>
      </LinksContainer>
      <Button
        text={`CONTACT`}
        href={'#'}
        size={'md'}
        style={{
          position: 'absolute',
          top: '50%',
          right: '6%',
          transform: 'translate(-6%, -50%)',
        }}
      />
    </NavbarContainer>
  )
}

export default Navbar
