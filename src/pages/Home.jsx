import styled from "styled-components"
import GithubIcon from '../assets/icons/GitHub-Mark-64px.png'
import ResumeIcon from '../assets/icons/icons8-resume-50.png'
import CodePenIcon from '../assets/icons/codepen.png'
import LinkedInIcon from '../assets/icons/LI-In-Bug.png'

const Home = () => {
  return (
    <HomeContainer>

      <HeaderName>
        Andrew J Salas
      </HeaderName>
      <SubHeader>
        Front End Developer | Sound Engineer
      </SubHeader>

      {/* Buttons */}
      <ButtonContainer>

        {/* Github */}
        <Button href="https://github.com/andrewjsalas" target='-blank'>
          <ButtonText>Github</ButtonText>
          <ButtonIcon src={GithubIcon}></ButtonIcon>
        </Button>

        {/* Resume */}
        <Button href="https://drive.google.com/file/d/1fdlNS_T9zzKzSNsJw0HQJyBDwtt4iRCK/view?usp=sharing" target='-blank'>
          <ButtonText>Resume</ButtonText>
          <ButtonIcon src={ResumeIcon}></ButtonIcon>
        </Button>

        {/* CodePen */}
        <Button href="https://codepen.io/andrewjsalas" target='-blank'>
          <ButtonText>CodePen</ButtonText>
          <ButtonIcon src={CodePenIcon}></ButtonIcon>
        </Button>

        {/* LinkedIn */}
        <Button href="https://www.linkedin.com/in/andrewjsalas/" target='-blank'>
          <ButtonText>LinkedIn</ButtonText>
          <ButtonIcon src={LinkedInIcon}></ButtonIcon>
        </Button>
      </ButtonContainer>

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: white;
  background-image: linear-gradient(62deg, #28313a 0%, #171618 100%);

  @media (max-width: 800px) {
    padding: 1.5rem;
  }
`

const HeaderName = styled.h1`
  display: flex;
  text-align: center;
  font-size: 6rem;

  @media (max-width: 400px) {
    font-size: 4rem;
  }
`

const SubHeader = styled.h3`
  font-size: 3rem;
  margin-top: 1rem;
  color: steelblue;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`

const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 0;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

`

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  padding: 0.3rem;
  background-color: white;
  margin: 1rem;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 5px 10px 18px #080808;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 85%;
    box-shadow: 5px 10px 8px #000000;
  }
`

const ButtonText = styled.span`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-weight: 600;
  padding: 0.3rem;
  font-family: 'Mukta', sans-serif;
`

const ButtonIcon = styled.img`
  height: 3rem;
  padding-left: 0.5rem;
`

export default Home