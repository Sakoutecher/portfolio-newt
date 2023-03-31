//Librairies
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

//Variables
import { colors, fonts, bigLetters } from '../../config/variables'

const TypeText = () => {
  return (
    <TypeAnimation
      sequence={['MOTION', 2000, 'GRAPHIC', 2000, 'UX UI', 2000]}
      wrapper='h1'
      repeat={Infinity}
      speed={1}
      deletionSpeed={1}
      style={{
        fontFamily: fonts.OTR,
        color: colors.primary,
        textTransform: 'uppercase',
        fontSize: bigLetters.lg,
        fontWeight: 'normal',
        letterSpacing: '8px',
        lineHeight: '1.1',
      }}
    />
  )
}

export default TypeText
