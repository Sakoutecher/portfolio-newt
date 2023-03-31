//Librairies
import React from 'react'

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
  return (
    <NavbarContainer>
      <LinksContainer>
        <PseudoElement active={window.location.pathname === '/' ? true : false}>
          <NavbarLinks>ACCUEIL</NavbarLinks>
        </PseudoElement>
        <PseudoElement
          active={window.location.pathname === '/about' ? true : false}
        >
          <NavbarLinks>A PROPOS</NavbarLinks>
        </PseudoElement>
        <PseudoElement
          active={window.location.pathname === '/projects' ? true : false}
        >
          <NavbarLinks>PROJETS</NavbarLinks>
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
