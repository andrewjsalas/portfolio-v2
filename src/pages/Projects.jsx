import styled from "styled-components"
import CrateDiggerThumb from '../assets/projectThumbs/crate-digger-2.png';
import MusicPlayerThumb from '../assets/projectThumbs/react-music-player-screenshot.png';
import DrunkenSpiritsThumb from '../assets/projectThumbs/the-drunken-spirits-screenshot.png';
import FirebaseLoginForm from '../assets/projectThumbs/firebase-login-form.png'

const Projects = () => {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>

      <GridContainer>
        {/* Drunken Spirits App */}
        <GridCard>
          <CardHeader>The Drunken Spirits</CardHeader>
          <GridImage src={DrunkenSpiritsThumb}></GridImage>
          <CardButtons 
            href='https://the-drunken-spirits.netlify.app/'
            target='_blank'
            >Demo
          </CardButtons>
          <CardButtons
            href="https://github.com/andrewjsalas/the-drunken-spirits"
            target='_blank'
            >GitHub</CardButtons>
          <CardInfo> 
            <li>
              A cocktail recipe app where the user can search a 
              database of drink recipes, images, and more. 
            </li>
            <li>
              Built with React, utilizing React Router, 
              Styled Components, and The CocktailDB API. 
            </li>
          </CardInfo>
        </GridCard>

        <GridCard>
          <CardHeader>Firebase Login Form</CardHeader>
          <GridImage src={FirebaseLoginForm}></GridImage>
          <CardButtons 
            href='https://ajs-login-form.netlify.app/'
            target='_blank'
            >Demo
          </CardButtons>
          <CardButtons
            href="https://github.com/andrewjsalas/react-login-signup"
            target='_blank'
            >GitHub</CardButtons>
          <CardInfo> 
            <li>
              A Signup and Login Form. 
            </li>
            <li>
              Built with React, utilizing React Router, Firebase for login and signup 
              authentication, and Firebase Google Auth for users who want to use their 
              gmail. 
            </li>
            <li>
              Styled with Bootstrap 5.
            </li>
          </CardInfo>
        </GridCard>

        {/* Crate Digger  */}
        <GridCard>
          <CardHeader>Crate Digger</CardHeader>
          <GridImage src={CrateDiggerThumb}></GridImage>
          <CardButtons
            href="https://salas-crate-digger-2.netlify.app/"
            target='_blank'
            >Demo
          </CardButtons>
          <CardButtons
            href="https://github.com/andrewjsalas/crate-digger-2"
            target='_blank'
            >GitHub
          </CardButtons>
          <CardInfo>
            <li>
              A customizable table to log your record collection along with
              the option to edit, delete, and cancel an unfinished edit. 
            </li>
            <li>
              Built with React, utiliizing useState and useEffect methods. 
            </li>
          </CardInfo>
        </GridCard>

        {/* React Music Player */}        
        <GridCard>
          <CardHeader>React Music Player</CardHeader>
          <GridImage src={MusicPlayerThumb}></GridImage>
          <CardButtons 
            href="https://salas-react-music-player.netlify.app/"
            target='_blank'
            >Demo
          </CardButtons>
          <CardButtons
            href="https://github.com/andrewjsalas/react-music-player"
            target='_blank'
            >GitHub
          </CardButtons>
          <CardInfo>
            <li>
              A music player UI with pause, play, forward, and back
              functionality. 
            </li>
            <li>Built with React</li>
          </CardInfo>
        </GridCard>

      </GridContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  padding: 1rem;
  color: white;
  text-align: center;

  @media (max-width: 800px) {
    padding: 2rem;
  }
`

const PageHeader = styled.h1`
  margin: 0 auto;
  margin-top: 8rem;
  text-transform: uppercase;
  font-size: 4rem;
  padding: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    font-size: 3rem;
    margin-top: 6rem;
  }
`

const GridContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  text-align: center;
  margin: 20rem auto;
  grid-gap: 4rem;
  margin-top: 2rem;
`

const GridCard = styled.div`
  flex-direction: column;
  background-color: #1f1f1f;
  box-shadow: 5px 10px 18px #080808;
  transition: 0.1s ease-in-out;
  border-radius: 3px;

  &:hover {
    box-shadow: 5px 10px 18px #000000;
  }
`

const CardHeader = styled.h3`
  padding: 1rem;
  color: white;
  font-weight: 800;
  font-size: 2rem;
  font-family: 'Mukta', sans-serif;
`

const GridImage = styled.img` 
  display: grid;
  width: 100%;
  height: auto;
  vertical-align: middle;
  justify-content: center;
  margin: 0 auto;
  border-top: 1px solid steelblue;

  @media (max-width: 800px) {
  }
`

const CardButtons = styled.a`
  display: inline-flex;
  justify-content: space-between;
  margin: 1rem 2rem;
  padding: 0.5rem;
  color: steelblue;
  font-weight: 800;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: white;
  }

`

const CardInfo = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  color: white;
  border-top: 1px solid steelblue;
  justify-content: center;
  
  li {
    margin-bottom: 1rem;
  }
`

export default Projects
