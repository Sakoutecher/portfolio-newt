//Librairies
import styled from 'styled-components'

//Variables
import { colors, fonts, fontSize } from '../../config/variables'

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 13vh;
  position: fixed;
  top: 0;
`

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8em;
`

export const PseudoElement = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background-color: ${colors.textColor};
    width: 0%;
    height: 2.5px;
    bottom: -15%;
    transition: width 0.7s ease;
  }

  &:hover::before {
    width: 50%;
  }
`

export const NavbarLinks = styled.a`
  color: ${colors.textColor};
  text-transform: uppercase;
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  cursor: pointer;
`
