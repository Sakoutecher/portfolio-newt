//Librairies
import React from 'react'
import { useLocation } from 'react-router-dom'
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
  ButtonContainer,
} from '../styles/pages/OneProject.style'

//Components
import Credits from '../components/Credits/Credits'
import DescriptionProject from '../components/DescriptionProject/DescriptionProject'
import RenduFinal from '../components/RenduFinal/RenduFinal'
import Button from '../components/Button/Button'

//Data
import { projects } from '../data/projects'

const OneProject = () => {
  const location = useLocation()
  const index = Number(location.pathname.replace('/one-project/', ''))

  return (
    <>
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
        {projects[index].renduFinal === true ? (
          <RenduFinal
            url={
              projects[index].video === true
                ? projects[index].videoPath
                : projects[index].imgAccueil
            }
            video={projects[index].video === true ? true : false}
          />
        ) : (
          <ButtonContainer>
            <Button
              href={projects[index].hrefButton}
              text={`VOIR LE PROJET`}
              size={'md'}
            />
          </ButtonContainer>
        )}
      </OneProjectContainer>
    </>
  )
}

export default OneProject
