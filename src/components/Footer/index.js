import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/all'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  SocialIcons

} from './FooterElements'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'> <FaFacebook /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'> <FaInstagram /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='YouTube' rel='noopener noreferrer'> <FaYoutube /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'> <FaTwitter /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin' rel='noopener noreferrer'> <FaLinkedin /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}
