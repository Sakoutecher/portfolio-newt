//Librairies
import React from 'react'

//Styles
import {
  FooterContainer,
  Line,
  ContentContainer,
  GoTop,
  LinksContainer,
  Links,
} from './Footer.style'

const Footer = () => {
  return (
    <FooterContainer>
      <Line />
      <ContentContainer>
        <GoTop>REVENIR EN HAUT</GoTop>
        <LinksContainer>
          <Links>MAIL</Links>
          <Links>BEHANCE</Links>
          <Links>INSTRAGRAM</Links>
          <Links>LINKEDIN</Links>
          <Links>TWITTER</Links>
        </LinksContainer>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footer
