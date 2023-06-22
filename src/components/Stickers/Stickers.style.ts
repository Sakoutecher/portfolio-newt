//Librairies
import styled from 'styled-components'

//Variables
import { colors, mediaSize } from '../../config/variables'

type StickersContainer = {
  location: string
}

export const StickersContainer = styled.div<StickersContainer>`
  width: 18em;
  height: 18em;
  border-radius: 50%;
  background-color: ${colors.primary};
  position: absolute;
  top: ${(props) => (props.location === '/contact' ? '0%' : '18%')};
  right: ${(props) => (props.location === '/contact' ? '28%' : '20%')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${mediaSize.phone} {
    top: 43%;
    right: 7%;
  }
`
