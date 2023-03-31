//Librairies
import styled from 'styled-components'

//Variables
import { colors } from '../../config/variables'

export const StickersContainer = styled.div`
  width: 14em;
  height: 14em;
  border-radius: 50%;
  background-color: ${colors.primary};
  position: absolute;
  top: 18%;
  right: 20%;
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