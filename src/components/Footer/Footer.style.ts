//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, fonts, colors } from '../../config/variables'

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 13vh;
  position: fixed;
  bottom: 0;
`

export const Line = styled.div`
  position: asbolute;
  height: 2px;
  background-color: ${colors.primary};
  width: 90%;
  border-radius: 8px;
  top: 0;
  margin: 0 auto;
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const GoTop = styled.button`
  color: ${colors.primary};
  text-transform: uppercase;
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  cursor: pointer;
  letter-spacing: 2px;
  text-decoration: underline;
  background-color: transparent;
  border: none;
`

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5em;
`

export const Links = styled.a`
  color: ${colors.primary};
  text-transform: uppercase;
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  cursor: pointer;
  letter-spacing: 2px;
  text-decoration: underline;
`
