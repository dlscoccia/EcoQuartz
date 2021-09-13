import React from 'react'
import { FaCopyright, FaInstagram } from 'react-icons/fa'
import { CopyIcon, FooterContainer, SocialMedia, TextContainer } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <CopyIcon>
        <FaCopyright />
        </CopyIcon>
        Todos los derechos reservados {new Date().getFullYear()}
      </TextContainer>
      <SocialMedia>
        <a href="https://www.instagram.com/ecoquartz/?hl=en" target='_blank' rel='noreferrer'><FaInstagram /></a>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
