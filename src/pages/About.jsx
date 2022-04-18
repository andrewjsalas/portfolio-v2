import styled from "styled-components"
import CSSLogo from '../assets/icons/CSS3_logo-color.svg'
import HTMLLogo from '../assets/icons/HTML5_Badge_512.png'
import JSLogo from '../assets/icons/javascript-39404.png'
import ReactLogo from '../assets/icons/React-icon-color.svg'
import StyledComponentsLogo from '../assets/icons/styled-components-logo.svg'
import FirebaseLogo from '../assets/icons/firebase-logo.png'

const About = () => {
  return (
    <PageContainer>
      <PageHeader>ABOUT ME</PageHeader>

      <AboutSection>
        <AboutText>
          My name is Andrew J Salas, a Front End Developer 
          and Sound Engineer from Los Angeles, CA. In August 
          of 2020 I began attending College of the Canyons to 
          pursue an Associates Degree in Computer Science. Since then 
          I have been learning and creating apps and web development 
          projects. My goal is to develop immersive apps and 
          websites and one day develop UI's for music software
          and soundboards. 
          When i'm not studying I'm out collecting vinyls, watching
          films, or playing the piano.   
        </AboutText>

        <SkillsContainer>
          <SkillsItem>
            <SkillsIcon src={HTMLLogo} />
            <p>HTML</p>
          </SkillsItem>

          <SkillsItem>
            <SkillsIcon src={CSSLogo} />
            <p>CSS</p>
          </SkillsItem>

          <SkillsItem>
            <SkillsIcon src={JSLogo} />
            <p>JAVASCRIPT</p>
          </SkillsItem>

          <SkillsItem>
            <SkillsIcon src={ReactLogo} />
            <p>REACT</p>
          </SkillsItem>

          <SkillsItem>
            <SkillsIcon src={StyledComponentsLogo} />
            <p>STYLED COMPONENTS</p>
          </SkillsItem>

          <SkillsItem>
            <SkillsIcon src={FirebaseLogo} />
            <p>FIREBASE</p>
          </SkillsItem>

        </SkillsContainer>

      </AboutSection>

      

    </PageContainer>
  )
}

const PageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(62deg, #28313a 0%, #171618 100%);
  background-repeat: no-repeat; 
  overflow: hidden;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media (max-width: 500px) {
    width: 100vw; 
  }
`

const PageHeader = styled.h1`
  text-align: center;
  margin-top: 10rem;
  font-size: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 400px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const AboutSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2rem;
  max-width: 1500px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

const AboutText = styled.p`
  margin: 0 auto;
  width: 40%;
  align-items: center;
  float: left;

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 55%;
    font-size: 1.2rem;
  }
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  justify-content: center;
  grid-gap: 1rem;
  align-items: center;
  padding: 3rem;
  width: 50%;
`

const SkillsItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;

  p {
    font-size: 1rem;
    text-align: center;
  }
`

const SkillsIcon = styled.img`
  width: auto;
  height: 50px;
  margin-bottom: 0.5rem;
`

export default About