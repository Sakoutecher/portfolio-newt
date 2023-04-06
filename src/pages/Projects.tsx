//Librairies
import React, { useState } from 'react'
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
  const [filter, setFilter] = useState<string>('ALL')

  const setFilterALL = () => {
    setFilter('ALL')
  }

  const setFilterMO = () => {
    setFilter('MOTION DESIGN')
  }

  const setFilterGD = () => {
    setFilter('GRAPHIC DESIGN')
  }

  const setFilterUX = () => {
    setFilter('UX UI DESIGN')
  }

  const setFilterVE = () => {
    setFilter('VIDEO EDITING')
  }

  const setFilter3D = () => {
    setFilter('3D')
  }

  let filteredProjects = projects

  if (filter === 'ALL') {
    console.log('Filter ALL')
    filteredProjects = projects.filter((project) => project.filter === filter)
  } else {
    console.log('Filter pas ALL')
    filteredProjects = projects.filter(
      (project) => project.mainsTag[0] === filter
    )
  }

  return (
    <ProjectsContainer>
      <FilterContainer>
        <Button
          text={`TOUS`}
          size={'s'}
          onclick={setFilterALL}
          active={filter === 'ALL' ? true : false}
        />
        <Button
          text={`MOTION DESIGN`}
          size={'s'}
          onclick={setFilterMO}
          active={filter === 'MOTION DESIGN' ? true : false}
        />
        <Button
          text={`GRAPHIC DESIGN`}
          size={'s'}
          onclick={setFilterGD}
          active={filter === 'GRAPHIC DESIGN' ? true : false}
        />
        <Button
          text={`UX UI DESIGN`}
          size={'s'}
          onclick={setFilterUX}
          active={filter === 'UX UI DESIGN' ? true : false}
        />
        <Button
          text={`VIDEO EDITING`}
          size={'s'}
          onclick={setFilterVE}
          active={filter === 'VIDEO EDITING' ? true : false}
        />
        <Button
          text={`3D`}
          href={'#'}
          size={'s'}
          onclick={setFilter3D}
          active={filter === '3D' ? true : false}
        />
      </FilterContainer>
      <GridContainer>
        {filteredProjects.map(
          ({ title, imgPath, mainsTag, secondsTags, id }) => (
            <Project
              id={id}
              key={uuid()}
              title={title}
              imgPath={imgPath}
              mainsTag={mainsTag}
              secondsTags={secondsTags}
            />
          )
        )}
      </GridContainer>
    </ProjectsContainer>
  )
}

export default Projects
