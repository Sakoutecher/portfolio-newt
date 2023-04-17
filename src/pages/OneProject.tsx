//Librairies
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import uuid from 'react-uuid'

//Styles
import {
  ImgProjectContainer,
  ImgProject,
  OneProjectContainer,
  TitleContainer,
  Title,
  CreditsContainer,
  DescriptionContainer,
  NavRoute,
  NavText,
} from '../styles/pages/OneProject.style'

//Components
import Credits from '../components/Credits/Credits'
import DescriptionProject from '../components/DescriptionProject/DescriptionProject'
import RenduFinal from '../components/RenduFinal/RenduFinal'
import PageTransition from '../components/PageTransition/PageTransition'

//Data
import { projects } from '../data/projects'

const OneProject = () => {
  const location = useLocation()
  const index = Number(location.pathname.replace('/one-project/', ''))

  return (
    <>
      <PageTransition
        style={{
          display: 'flex',
          justifyContente: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <NavRoute>
          <NavText>PROJETS</NavText>
          <NavText>{'>'}</NavText>
          <Link to='/projects'>
            <NavText>{projects[index].mainsTag[0]}</NavText>
          </Link>
          <NavText>{'>'}</NavText>
          <NavText style={{ textDecoration: 'underline' }}>
            {projects[index].title}
          </NavText>
        </NavRoute>
        <ImgProjectContainer>
          <ImgProject src={projects[index].imgAccueil} />
        </ImgProjectContainer>
        <OneProjectContainer>
          <TitleContainer>
            <Title>{projects[index].title}</Title>
          </TitleContainer>
          <CreditsContainer>
            <Credits text={projects[index].client} />
            <Credits text={projects[index].role} />
            <Credits text={projects[index].credits} />
          </CreditsContainer>
          <DescriptionContainer>
            {projects[index].description.map(({ title, desc, side }) => (
              <DescriptionProject key={uuid()} title={title} side={side}>
                {desc}
              </DescriptionProject>
            ))}
          </DescriptionContainer>
          <RenduFinal
            url={
              projects[index].type === 'video'
                ? projects[index].videoPath
                : projects[index].imgPath
            }
            type={projects[index].type}
            hrefButton={projects[index].hrefButton}
          />
        </OneProjectContainer>
      </PageTransition>
    </>
  )
}

export default OneProject
