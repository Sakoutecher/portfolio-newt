//Librairies
import styled from 'styled-components'

//Variables
import { colors, fonts, bigLetters, fontSize } from '../../config/variables'

export const NavRoute = styled.div`
  height: 8vh;
  width: 90vw;
  margin-top: 13vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`

export const NavText = styled.p`
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  color: ${colors.primary};
  text-transform: uppercase;
`

export const ImgProjectContainer = styled.div`
  height: 65vh;
  width: 100vw;
`

export const ImgProject = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const OneProjectContainer = styled.main`
  width: 90vw;
`

export const TitleContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${colors.primary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Title = styled.h1`
  font-family: ${fonts.OTR};
  font-size: ${bigLetters.s};
  color: ${colors.primary};
`

export const CreditsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 1em;
`

export const DescriptionContainer = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 75%;
  gap: 2em;
  margin-bottom: 4em;
`
