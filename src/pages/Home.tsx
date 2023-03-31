//Librairies
import React from 'react'

//Styles
import {
  HomeContainer,
  ArrowContainer,
  TextContainer,
  Text,
  Sticker,
  DrawingArrow,
} from '../styles/pages/Home.style'

//Variables
import { fontSize, colors } from '../config/variables'

//Icons
import { FaArrowDown } from 'react-icons/fa'

//SVG
import sticker from '../../public/assets/stickers.svg'
import drawingArrow from '../../public/assets/fleche.svg'

const Home = () => {
  return (
    <HomeContainer>
      <Sticker src={sticker} />
      <DrawingArrow src={drawingArrow} />
      <TextContainer>
        <Text>MOTION</Text>
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
  )
}

export default Home
