//Librairies
import styled from 'styled-components'

type TitleContainer = {
  active: boolean
}

export const AboutContainer = styled.main`
  width: 85vw;
  height: 87vh;
  margin-top: 13vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const MainGraphismeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.5em;
  margin-bottom: 2em;
`

export const GraphismeContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
`

export const MainExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2em;
`

export const ExperienceContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
`

export const TitleContainer = styled.div<TitleContainer>`
  display: flex;
  justify-container: center;
  align-items: center;
  gap: 0.8em;
  opacity: ${(props) => (props.active === true ? '1' : '0')};
  transform: ${(props) =>
    props.active === true ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 500ms ease;
`
