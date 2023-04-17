//Librairies
import styled from 'styled-components'

type MenuResponsiveContainer = {
  active: boolean
}

export const MenuResponsiveContainer = styled.div<MenuResponsiveContainer>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  display: ${(props) => (props.active === true ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
