import React, { useContext } from 'react'
import { Column, Wrapper, Row, Container, Icons, Icon, FooterLink, Title } from './style'
import { observer } from 'mobx-react-lite'
import { LogoFacebook, LogoInstagram, LogoLinkedin, LogoTwitter, SchoolOutline } from 'react-ionicons'
import { COLORS } from '../../../constants/colors'
import { ThemeContext } from '../../context/theme-context'

const Footer = observer(() => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper theme={theme}>
      <Container>
        <Row>
          <Column>
            <SchoolOutline color={COLORS.color1}
                           height="70px"
                           width="auto"/>
            Follow us
            <Icons>
              <Icon><LogoInstagram color="grey"/></Icon>
              <Icon><LogoFacebook color="grey"/></Icon>
              <Icon><LogoLinkedin color="grey"/></Icon>
              <Icon><LogoTwitter color="grey"/></Icon>
            </Icons>
          </Column>
          <Column>
            <Title>Explore</Title>
            <FooterLink>Home</FooterLink>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Courses</FooterLink>
            <FooterLink>Pages</FooterLink>
            <FooterLink>Blog</FooterLink>
          </Column>
          <Column>
            <Title>Information</Title>
            <FooterLink>Private Policy</FooterLink>
            <FooterLink>Membership</FooterLink>
            <FooterLink>Purchase Guide</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
            <FooterLink></FooterLink>
          </Column>
          <Column>
            <Title>Get in touch</Title>
            <FooterLink>Address: Sylhet, Bangladesh</FooterLink>
            <FooterLink>Phone: +880123456789</FooterLink>
            <FooterLink>Email: example@gmail.com</FooterLink>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
})

export default Footer