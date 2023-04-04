//Librairies
import React from 'react'

//Styles
import { SkillsContainer, SkillsText, Img, Skills } from './HardSkills.style'

//Images
import FichiersMo from '/assets/fichiers-mo.png'
import FichiersGr from '/assets/fichiers-gr.png'
import FichiersUx from '/assets/fichiers-ux.png'
import FichiersV from '/assets/fichiers-v.png'
import Fichiers3d from '/assets/fichiers-3d.png'

const HardSkills = () => {
  return (
    <SkillsContainer>
      <Skills>
        <Img src={FichiersMo} />
        <SkillsText>MOTION DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img src={FichiersGr} />
        <SkillsText>GRAPHIC DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img src={FichiersUx} />
        <SkillsText>UX UI DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img src={FichiersV} />
        <SkillsText>VIDEO EDITING</SkillsText>
      </Skills>
      <Skills>
        <Img src={Fichiers3d} />
        <SkillsText>3D</SkillsText>
      </Skills>
    </SkillsContainer>
  )
}

export default HardSkills
