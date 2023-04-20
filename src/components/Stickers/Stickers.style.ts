//Librairies
import styled from 'styled-components'

//Variables
import { colors, mediaSize } from '../../config/variables'

type StickersContainer = {
  location: string
}

export const StickersContainer = styled.div<StickersContainer>`
  width: 14em;
  height: 14em;
  border-radius: 50%;
  background-color: ${colors.primary};
  position: absolute;
  top: ${(props) => (props.location === '/contact' ? '0%' : '18%')};
  right: ${(props) => (props.location === '/contact' ? '28%' : '20%')};
  @media ${mediaSize.phone} {
    top: 49%;
    right: 18%;
  }
`

export const InnerCircle = styled.div`
  width: 9.5em;
  height: 9.5em;
  border-radius: 50%;
  background-color: ${colors.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`
