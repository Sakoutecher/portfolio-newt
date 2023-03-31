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
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <FooterContainer>
      <Line />
      <ContentContainer>
        <GoTop onClick={scrollTop}>REVENIR EN HAUT</GoTop>
        <LinksContainer>
          <Links href='mailto:antoinegervais.motion@outlook.fr'>MAIL</Links>
          <Links href='https://www.behance.net/antoinegvs'>BEHANCE</Links>
          <Links href='https://www.instagram.com/newwwwt_/'>INSTRAGRAM</Links>
          <Links href='https://www.linkedin.com/in/antoine-gervais-2475911aa/'>
            LINKEDIN
          </Links>
          <Links href='https://twitter.com/newwwwt_'>TWITTER</Links>
        </LinksContainer>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footer
