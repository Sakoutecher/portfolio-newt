//Librairies
import React, { useState } from 'react'

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
import PageTransition from '../components/PageTransition/PageTransition'
import Stickers from '../components/Stickers/Stickers'

//Icons
import { FaArrowDown } from 'react-icons/fa'

//SVG
import drawingArrow from '/assets/fleche.svg'

const Home = () => {
  const [xValue, setXValue] = useState<number>(0)
  const [yValue, setYValue] = useState<number>(0)

  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      'deviceorientation',
      function (event) {
        if (event.gamma !== null) {
          setXValue(Math.round(event.gamma))
        }
        if (event.beta !== null) {
          setYValue(Math.round(event.beta))
        }
      },
      true
    )
  } else {
    alert("Sorry, your browser doesn't support Device Orientation")
  }

  return (
    <>
      <PageTransition>
        <HomeContainer>
          <Stickers xValue={xValue} yValue={yValue} />
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
      </PageTransition>
    </>
  )
}

export default Home
