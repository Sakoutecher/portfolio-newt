//Librairies
import React, { FC } from 'react'
import uuid from 'react-uuid'

//Styles
import {
  Container,
  ImgContainer,
  InfoContainer,
  ProjectTitle,
  ProjectTitleContainer,
  BottomContainer,
  TagContainer,
  Img,
} from './Project.style'

//Components
import Tag from '../Tag/Tag'

type ProjectProps = {
  title: string
  imgPath: string
  mainTag: string
  secondsTags: Array<string>
}

const Project: FC<ProjectProps> = ({
  title,
  imgPath,
  mainTag,
  secondsTags,
}) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={imgPath} />
      </ImgContainer>
      <InfoContainer>
        <ProjectTitleContainer>
          <ProjectTitle>{title}</ProjectTitle>
        </ProjectTitleContainer>
        <BottomContainer>
          <TagContainer width={secondsTags.length}>
            <Tag text={mainTag} size='s' main={true} />
            {secondsTags.map((tag) => (
              <Tag key={uuid()} text={tag} size='s' main={false} />
            ))}
          </TagContainer>
        </BottomContainer>
      </InfoContainer>
    </Container>
  )
}

export default Project
