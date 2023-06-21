//Librairies
import styled from 'styled-components'

//Variables
import { fonts, colors, fontSize, mediaSize } from '../../config/variables'

export const SkillsContainer = styled.div`
  display: flex;
  max-width: 70%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8em;

  @media ${mediaSize} {
    gap: 4em;
  }
`

export const Skills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SkillsText = styled.p`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: ${fontSize.md};
  padding: 0.2em 0.6em;
  background-color: ${colors.secondary};
  text-align: center;
  font-weight: normal;
  letter-spacing: 5px;
`

export const Img = styled.img`
  width: 8vw;

  @media ${mediaSize.desktop} {
    width: 10vw;
  }
`
