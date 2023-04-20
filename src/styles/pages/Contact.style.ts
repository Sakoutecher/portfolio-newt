//Librairies
import styled from 'styled-components'

//Variables
import { colors, bigLetters, fonts, mediaSize } from '../../config/variables'

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

  @media ${mediaSize.phone} {
    font-size: ${bigLetters.xxs};
  }
`

export const SplitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${mediaSize.phone} {
    flex-direction: column;
  }
`

export const LeftContainer = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  alifn-items: center;
  flex-direction: column;
  gap: 2em;

  @media ${mediaSize.phone} {
    width: 100%;
    gap: 1.8em;
  }
`

export const InputContainerInline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${mediaSize.phone} {
    flex-direction: column;
    gap: 1.8em;
  }
`

export const InputLeft = styled.div`
  width: 48%;

  @media ${mediaSize.phone} {
    width: 100%;
  }
`

export const InputRight = styled.div`
  width: 48%;

  @media ${mediaSize.phone} {
    width: 100%;
  }
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

  @media ${mediaSize.phone} {
    display: none;
  }
`
