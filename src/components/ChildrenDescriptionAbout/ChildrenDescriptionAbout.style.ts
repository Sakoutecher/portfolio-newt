//Librairies
import styled from 'styled-components'

//Variables
import { colors, fontSize, fonts, mediaSize } from '../../config/variables'

export const Description = styled.p`
  font-family: ${fonts.WorkSans};
  color: ${colors.primary};
  font-size: ${fontSize.s};
  font-weight: normal;
  letter-spacing: 1px;
  line-height: 1.2;
  margin-top: 1em;

  @media ${mediaSize.phone} {
    width: 135%;
  }
`
