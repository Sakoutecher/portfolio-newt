//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, colors, fonts } from '../../config/variables'

export const CreditsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Text = styled.span`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  font-size: ${fontSize.xs};
`
