//Librairies
import React from 'react'
import uuid from 'react-uuid'

//Styles
import {
  FilterContainer,
  GridContainer,
  ProjectsContainer,
} from '../styles/pages/Projects.style'

//Data
import { projects } from '../data/projects'

//components
import Button from '../components/Button/Button'
import Project from '../components/Project/Project'

const Projects = () => {
  return (
    <ProjectsContainer>
      <FilterContainer>
        <Button text={`MOTION DESIGN`} href={'#'} size={'s'} />
        <Button text={`GRAPHIC DESIGN`} href={'#'} size={'s'} />
        <Button text={`UX UI DESIGN`} href={'#'} size={'s'} />
        <Button text={`VIDEO EDITING`} href={'#'} size={'s'} />
        <Button text={`3D`} href={'#'} size={'s'} />
      </FilterContainer>
      <GridContainer>
        {projects.map(({ title, imgPath, mainsTag, secondsTags }) => (
          <Project
            key={uuid()}
            title={title}
            imgPath={imgPath}
            mainsTag={mainsTag}
            secondsTags={secondsTags}
          />
        ))}
      </GridContainer>
    </ProjectsContainer>
  )
}

export default Projects
