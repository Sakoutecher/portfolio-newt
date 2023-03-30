//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, colors, fonts } from '../../config/variables'

type GlobalButton = {
  size: 's' | 'md' | 'lg'
}

export const GlobalButton = styled.a<GlobalButton>`
  font-family: ${fonts.OTR};
  color: ${colors.textColor};
  font-size: ${(props) =>
    props.size === 's'
      ? fontSize.s
      : props.size === 'md'
      ? fontSize.md
      : fontSize.lg};
  text-transform: uppercase;
  border: 2px solid ${colors.textColor};
  border-radius: 15px;
  padding: 0.1em 1.1em;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: ${colors.secondary};
    background-color: ${colors.textColor};
  }
`
