//Librairies
import styled from 'styled-components'

//Variables
import { fontSize, colors, fonts } from '../../config/variables'

type GlobalButton = {
  size: 's' | 'md' | 'lg'
}

export const GlobalButton = styled.a<GlobalButton>`
  font-family: ${fonts.OTR};
  color: ${colors.primary};
  font-size: ${(props) =>
    props.size === 's'
      ? fontSize.s
      : props.size === 'md'
      ? fontSize.md
      : fontSize.lg};
  text-transform: uppercase;
  border: 1px solid ${colors.primary};
  border-radius: 15px;
  padding: 0.1em 1.1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.1;
  transition: all 0.5s ease;
  z-index: 90;

  &:hover {
    color: ${colors.secondary};
    background-color: ${colors.primary};
  }
`
