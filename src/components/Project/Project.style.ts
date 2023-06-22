//Librairies
import styled from 'styled-components'

//Variables
import { colors, fonts, fontSize } from '../../config/variables'

type TagContainer = {
  width: number
}

export const Container = styled.div`
  border-radius: 2%;
  border: 2px solid ${colors.primary};
  overflow: hidden;
  cursor: pointer;
  height: 100%;

  &:hover img {
    transform: scale(1.1);
  }
`

export const ImgContainer = styled.div`
  height: 70%;
  width: 100%;
  border-bottom: 2px solid ${colors.primary};
  overflow: hidden;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 500ms ease;
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${colors.secondary};
  border-bottom-left-radius: 2%;
  border-bottom-right-radius: 2%;
`

export const ProjectTitleContainer = styled.div`
  height: 65%;
  width: 100%;
  padding-top: 0.3em;
  padding-left: 0.5em;
`

export const BottomContainer = styled.div`
  height: 35%;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TagContainer = styled.div<TagContainer>`
  height: 100%;
  width: ${(props) =>
    props.width === 1
      ? '120%'
      : props.width === 2
      ? '160%'
      : props.width === 3
      ? '190%'
      : props.width === 4
      ? '220%'
      : props.width === 5
      ? '270%'
      : props.width === 0
      ? '110%'
      : 'null'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  padding-left: 0.5em;
`

export const ProjectTitle = styled.div`
  font-family: ${fonts.OTR};
  font-size: ${fontSize.md};
  color: ${colors.primary};
  letter-spacing: 2px;
`
