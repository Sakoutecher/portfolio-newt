//Librairies
import styled from 'styled-components'

//Variables
import { colors, bigLetters, fonts } from '../../config/variables'

export const ContactContainer = styled.div`
  width: 85vw;
  height: 87vh;
  margin-top: 13vh;
  display: flex;
  jsutify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 3em;
`

export const ContactTitle = styled.h4`
  color: ${colors.primary};
  font-size: ${bigLetters.s};
  font-family: ${fonts.OTR};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 0.8em;
`

export const SplitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftContainer = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  alifn-items: center;
  flex-direction: column;
  gap: 2em;
`

export const InputContainerInline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputLeft = styled.div`
  width: 48%;
`

export const InputRight = styled.div`
  width: 48%;
`

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const RightContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
