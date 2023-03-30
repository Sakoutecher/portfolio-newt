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
        <PseudoElement>
          <NavbarLinks>ACCUEIL</NavbarLinks>
        </PseudoElement>
        <PseudoElement>
          <NavbarLinks>A PROPOS</NavbarLinks>
        </PseudoElement>
        <PseudoElement>
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
