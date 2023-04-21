//Librairies
import styled from 'styled-components'

//Variables
import { colors, fonts, bigLetters } from '../../config/variables'

export const NotFoundContainer = styled.div`
  width: 85vw;
  height: 87vh;
  margin-top: 13vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const TextContainer = styled.div`
  display: flex;
  jsutify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`

export const NotFoundText = styled.h3`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  font-size: ${bigLetters.xl};
  text-transform: uppercase;
`
