//Librairies
import styled from 'styled-components'

export const ProjectsContainer = styled.main`
  width: 85vw;
  min-height: 87vh;
  margin-top: 13vh;
`

export const FilterContainer = styled.div`
  width: 100%;
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  grid-auto-rows: 320px;
  margin-bottom: 3%;
`
