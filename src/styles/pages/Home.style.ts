//Librairies
import styled from 'styled-components'

//Variaables
import { bigLetters, colors, fonts } from '../../config/variables'

export const HomeContainer = styled.div`
  width: 85vw;
  height: 87vh;
  margin-top: 13vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

export const Text = styled.h1`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  text-transform: uppercase;
  font-size: ${bigLetters.lg};
  font-weight: normal;
  letter-spacing: 8px;
  line-height: 1.1;
`

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -3%);
`

export const DrawingArrow = styled.img`
  position: absolute;
  width: 70vw;
  top: -22%;
  right: -35%;
`
