//Librairies
import React from 'react'

//Styles
import {
  HomeContainer,
  ArrowContainer,
  TextContainer,
  Text,
  DrawingArrow,
  HardSkillsContainer,
  HardSkillsTitle,
} from '../styles/pages/Home.style'

//Variables
import { fontSize, colors } from '../config/variables'

//Components
import TypeText from '../components/TypeText/TypeText'
import HardSkills from '../components/HardSkills/HardSkills'

//Icons
import { FaArrowDown } from 'react-icons/fa'

//SVG
import Stickers from '../components/CustomSVG/Stickers'
import drawingArrow from '../../public/assets/fleche.svg'

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Stickers />
        <DrawingArrow src={drawingArrow} />
        <TextContainer>
          <TypeText />
          <Text>DESIGNER</Text>
          <Text>+ART DIRECTOR</Text>
        </TextContainer>
        <ArrowContainer>
          <FaArrowDown
            size={fontSize.xl}
            color={colors.primary}
            className='arrowDown'
          />
          <FaArrowDown
            size={fontSize.xl}
            color={colors.primary}
            className='arrowDown'
          />
          <FaArrowDown
            size={fontSize.xl}
            color={colors.primary}
            className='arrowDown'
          />
        </ArrowContainer>
      </HomeContainer>
      <HardSkillsContainer>
        <HardSkillsTitle>HARD SKILLS</HardSkillsTitle>
        <HardSkills />
      </HardSkillsContainer>
    </>
  )
}

export default Home
