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

export const HardSkills = () => {
  return (
    <SkillsContainer>
      <Skills>
        <Img loading='lazy' src={FichiersMo} alt='Logo compétence' />
        <SkillsText>MOTION DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img loading='lazy' src={FichiersGr} alt='Logo compétence' />
        <SkillsText>GRAPHIC DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img loading='lazy' src={FichiersUx} alt='Logo compétence' />
        <SkillsText>UX UI DESIGN</SkillsText>
      </Skills>
      <Skills>
        <Img loading='lazy' src={FichiersV} alt='Logo compétence' />
        <SkillsText>VIDEO EDITING</SkillsText>
      </Skills>
      <Skills>
        <Img loading='lazy' src={Fichiers3d} alt='Logo compétence' />
        <SkillsText>3D</SkillsText>
      </Skills>
    </SkillsContainer>
  )
}
